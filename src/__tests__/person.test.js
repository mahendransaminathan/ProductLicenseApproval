import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PersonDetails from "../modules/persondetails/PersonDetails";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: "Success" }),
  })
);

describe("PersonDetails Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders all input fields and the submit button", () => {
    render(
      <BrowserRouter>
        <PersonDetails />
      </BrowserRouter>
    );

    // Check if all input fields are rendered
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Street Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Postal Code/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Date of Birth/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  test("handles user input correctly", () => {
    render(
      <BrowserRouter>
        <PersonDetails />
      </BrowserRouter>
    );

    // Simulate user input
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Street Address/i), {
      target: { value: "123 Test Street" },
    });
    fireEvent.change(screen.getByLabelText(/City/i), {
      target: { value: "Test City" },
    });
    fireEvent.change(screen.getByLabelText(/State/i), {
      target: { value: "Test State" },
    });
    fireEvent.change(screen.getByLabelText(/Country/i), {
      target: { value: "UnitedStates" },
    });
    fireEvent.change(screen.getByLabelText(/Postal Code/i), {
      target: { value: "12345" },
    });
    fireEvent.change(screen.getByLabelText(/Date of Birth/i), {
      target: { value: "1990-01-01" },
    });

    // Assert that the input values are updated
    expect(screen.getByLabelText(/First Name/i).value).toBe("John");
    expect(screen.getByLabelText(/Last Name/i).value).toBe("Doe");
    expect(screen.getByLabelText(/Street Address/i).value).toBe("123 Test Street");
    expect(screen.getByLabelText(/City/i).value).toBe("Test City");
    expect(screen.getByLabelText(/State/i).value).toBe("Test State");
    expect(screen.getByLabelText(/Country/i).value).toBe("UnitedStates");
    expect(screen.getByLabelText(/Postal Code/i).value).toBe("12345");
    expect(screen.getByLabelText(/Date of Birth/i).value).toBe("1990-01-01");
  });

  test("submits the form with correct data", async () => {
    render(
      <BrowserRouter>
        <PersonDetails />
      </BrowserRouter>
    );

    // Simulate user input
    fireEvent.change(screen.getByLabelText(/First Name/i), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText(/Last Name/i), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText(/Street Address/i), {
      target: { value: "123 Test Street" },
    });
    fireEvent.change(screen.getByLabelText(/City/i), {
      target: { value: "Test City" },
    });
    fireEvent.change(screen.getByLabelText(/State/i), {
      target: { value: "Test State" },
    });
    fireEvent.change(screen.getByLabelText(/Country/i), {
      target: { value: "UnitedStates" },
    });
    fireEvent.change(screen.getByLabelText(/Postal Code/i), {
      target: { value: "12345" },
    });
    fireEvent.change(screen.getByLabelText(/Date of Birth/i), {
      target: { value: "1990-01-01" },
    });

    // Simulate form submission
    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    // Assert that fetch was called with the correct data
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      expect.any(String), // The API URL
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: "John",
          lastname: "Doe",
          addressline: "123 Test Street",
          phone: "",
          city: "Test City",
          state: "Test State",
          dob: "1990-01-01",
          country: "UnitedStates",
          zip: "12345",
        }),
      })
    );
  });
});
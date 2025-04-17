import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CompanyDetails from "../modules/CompanyDetails/CompanyDetails"; // Adjust the path if necessary
import { v4 as uuidv4 } from "uuid";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: "Success" }),
  })
);

describe("CompanyDetails Component", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("renders all input fields and the submit button", () => {
    render(<CompanyDetails />);

    // Check if all input fields are rendered
    expect(screen.getByLabelText(/Company Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/RegNumber/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Street Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/state/i)).toBeInTheDocument();
    // expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Postal Code/i)).toBeInTheDocument();

    // Check if the submit button is rendered
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  test("allows user to input data into fields", () => {
    render(<CompanyDetails />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Company Name/i), {
      target: { value: "Test Company" },
    });
    fireEvent.change(screen.getByLabelText(/RegNumber/i), {
      target: { value: "12345" },
    });
    fireEvent.change(screen.getByLabelText(/Street Address/i), {
      target: { value: "123 Test Street" },
    });
    fireEvent.change(screen.getByLabelText(/City/i), {
      target: { value: "Test City" },
    });
    fireEvent.change(screen.getByLabelText(/state/i), {
      target: { value: "Test State" },
    });
    // fireEvent.change(screen.getByLabelText(/Country/i), {
    //   target: { value: "UnitedStates" },
    // });
    fireEvent.change(screen.getByLabelText(/Postal Code/i), {
      target: { value: "123456" },
    });

    // Assert that the input values are updated
    expect(screen.getByLabelText(/Company Name/i)).toHaveValue("Test Company");
    expect(screen.getByLabelText(/RegNumber/i)).toHaveValue("12345");
    expect(screen.getByLabelText(/Street Address/i)).toHaveValue(
      "123 Test Street"
    );
    expect(screen.getByLabelText(/City/i)).toHaveValue("Test City");
    expect(screen.getByLabelText(/state/i)).toHaveValue("Test State");
    // expect(screen.getByLabelText(/Country/i)).toHaveValue("UnitedStates");
    expect(screen.getByLabelText(/Postal Code/i)).toHaveValue("123456");
  });

  test("submits the form with correct data", async () => {
    render(<CompanyDetails />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText(/Company Name/i), {
      target: { value: "Test Company" },
    });
    fireEvent.change(screen.getByLabelText(/RegNumber/i), {
      target: { value: "12345" },
    });
    fireEvent.change(screen.getByLabelText(/Street Address/i), {
      target: { value: "123 Test Street" },
    });
    fireEvent.change(screen.getByLabelText(/City/i), {
      target: { value: "Test City" },
    });
    fireEvent.change(screen.getByLabelText(/state/i), {
      target: { value: "Test State" },
    });
    // fireEvent.change(screen.getByLabelText(/Country/i), {
    //   target: { value: "UnitedStates" },
    // });
    fireEvent.change(screen.getByLabelText(/Postal Code/i), {
      target: { value: "123456" },
    });

    // Simulate form submission
    fireEvent.click(screen.getByRole("button", { name: /Submit/i }));

    // Assert that fetch was called with the correct data
    expect(fetch).toHaveBeenCalledTimes(1);
    const uid = uuidv4(); // Generate a UUID
    expect(fetch).toHaveBeenCalledWith(
      expect.any(String), // The API URL
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: uid, // UUID generated
          companyname: "Test Company",
          registrationNumber: "12345",
          address: "123 Test Street",
          city: "Test City",
          state: "Test State",
          country: "UnitedStates",
          eircode: "123456",
        }),
      })
    );
  });
});
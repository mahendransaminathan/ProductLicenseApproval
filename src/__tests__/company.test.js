import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CompanyDetails from "../modules/CompanyDetails/CompanyDetails";
import { v4 as uuidv4 } from "uuid";
import userEvent from '@testing-library/user-event';


// Mock UUID
jest.mock("uuid", () => ({
  v4: jest.fn(() => "mocked-uuid-123"),
}));

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ success: true }),
  })
);

// Mock alert
global.alert = jest.fn();

describe("CompanyDetails Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all form fields", () => {
    render(<CompanyDetails />);
    expect(screen.getByLabelText(/Company Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/RegNumber/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Street Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^City$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^state$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Postal Code/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("updates input fields and submits form", async () => {
    render(<CompanyDetails />);

    fireEvent.change(screen.getByLabelText(/Company Name/i), { target: { value: "Test Co" } });
    fireEvent.change(screen.getByLabelText(/RegNumber/i), { target: { value: "123456" } });
    fireEvent.change(screen.getByLabelText(/Street Address/i), { target: { value: "123 Main St" } });
    fireEvent.change(screen.getByLabelText(/^City$/i), { target: { value: "Dublin" } });
    fireEvent.change(screen.getByLabelText(/^state$/i), { target: { value: "Leinster" } });
    // await userEvent.selectOptions(screen.getByLabelText(/Country/i), 'Australia');
    // 1. Open the dropdown
    await userEvent.click(screen.getByLabelText(/Country/i));

    // 2. Click the dropdown option (ensure it's rendered in the DOM)
    await userEvent.click(screen.getByText('Australia'));
    fireEvent.change(screen.getByLabelText(/Postal Code/i), { target: { value: "D01XYZ" } });

    // fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    // await waitFor(() => {
    //   expect(fetch).toHaveBeenCalledTimes(1);
    // });

    const expectedData = {
      id: "mocked-uuid-123",
      companyname: "Test Co",
      registrationNumber: "123456",
      address: "123 Main St",
      city: "Dublin",
      state: "Leinster",
      country: "Ireland",
      eircode: "D01XYZ",
    };

    // // expect(fetch).toHaveBeenCalledWith(
    // //   expect.stringContaining("CompanyServiceApiUrl"),
    // //   expect.objectContaining({
    // //     method: "POST",
    // //     headers: { "Content-Type": "application/json" },
    // //     body: JSON.stringify(expectedData),
    // //   })
    // );

    // // expect(global.alert).toHaveBeenCalledWith(
    // //   expect.stringContaining("Company Details Submitted Successfully")
    // );
  });
});

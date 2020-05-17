import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const {queryByTestId} = render(<CheckoutForm/>)
    expect(queryByTestId('header')).toBeTruthy()
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByText, findAllByText, getByTestId } = render(<CheckoutForm />);
  
    fireEvent.change(getByLabelText(/first name/i), {
      target: { value: "Wilma" }
    });
    fireEvent.change(getByLabelText(/last name/i), {
      target: { value: "Flintstone" }
    });
    fireEvent.change(getByLabelText(/address/i), {
      target: { value: "1234 Yabb Dabb doo rd" }
    });
    fireEvent.change(getByLabelText(/city/i), {
      target: { value: "Bedrock" }
    });
    fireEvent.change(getByLabelText(/state/i), {
      target: { value: "Rockville" }
    });
    fireEvent.change(getByLabelText(/zip/i), {
      target: { value: "99999" }
    });
  
    const checkoutButton = getByLabelText(/checkout/i);
  
    fireEvent.click(checkoutButton);
  
    findAllByText(/Wilma/i);
  
    expect(getByTestId("successMessage")).toBeInTheDocument();
  });
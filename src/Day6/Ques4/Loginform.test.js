import { render, fireEvent, screen } from "@testing-library/react";
import Loginform from "./Loginform";

test('Test username input field and form submission', () => {
    render(<Loginform />);
      const userfield = screen.getByLabelText('Enter the name');
    fireEvent.change(userfield, { target: { value: 'Udit Sengar' } }); 
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    const displayedName = screen.getByText('Udit Sengar');
    expect(displayedName).toBeInTheDocument();
});

test('Test password input field and form submission', () => {
    render(<Loginform />);
   const passwordField = screen.getByLabelText('Enter the password');
    fireEvent.change(passwordField, { target: { value: 'password123' } })
    const submitButton = screen.getByText('Submit');
    fireEvent.click(submitButton);
    const passwordValue = passwordField.value;
    expect(passwordValue).toBe('password123');
});



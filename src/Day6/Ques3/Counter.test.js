import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("Testing  increment button functionality", () => {
  render(<Counter />);
  const buttoname = screen.getByText("Increment");
  fireEvent.click(buttoname);
  const countelement = screen.getByText("1");
  expect(countelement).toBeInTheDocument();
});
test("Testing decrement button functionality", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("Decrement");
    expect(decrementButton).toBeInTheDocument();
    fireEvent.click(decrementButton);
    const countElementAfterDecrement = screen.getByText("-1")
    expect(countElementAfterDecrement).toBeInTheDocument();
});


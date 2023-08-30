
import React from "react";
import Spinner from "./Spinner";
import { render, screen } from "@testing-library/react";

test('spinner is working', () => {
  const {rerender} = render(<Spinner on={true}/>);
  let message = screen.queryByText('Please wait...');
  expect(message).toBeTruthy();

  rerender(<Spinner on={false}/>);
  message = screen.queryByText('Please wait...');
  expect(message).toBeFalsy();
})

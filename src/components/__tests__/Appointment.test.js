import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment";

afterEach(cleanup);
describe("Appointment", () => {
    it("renders without crashing", () => {
      render(<Appointment />);
    });
    
    xit("does something it is supposed to do", () => {
        // test code here...
      });
      
    test.skip("does something it is supposed to do", () => {
        // test code here...
      });
})

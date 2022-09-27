import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
// import { describe, it } from "node:test";

describe("Home", () => {
	it("renders a components", () => {
		render(<Home />);
	});
});

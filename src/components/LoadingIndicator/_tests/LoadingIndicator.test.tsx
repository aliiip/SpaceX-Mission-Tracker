import { render, screen } from "@testing-library/react";

import LoadingIndicator from "../index";

describe("LoadingIndicator", () => {
    test("Should render the loading indicator", () => {
        render(<LoadingIndicator/>);
        const loadingIndicator = screen.getByTestId("loadingIndicator");
        expect(loadingIndicator).toBeInTheDocument();
    });
});
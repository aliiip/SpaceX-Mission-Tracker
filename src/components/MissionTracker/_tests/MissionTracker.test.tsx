import { render, screen, act, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import MissionTracker from "../index";
import { GET_MISSIONS } from "../_gql_queries/GET_MISSIONS";
import { IMission } from "../../../_type_helpers/IMission";

describe("MissionTracker", () => {
    const successMock = [
        {
            request: {
                query: GET_MISSIONS,
            },
            result: {
                data: {
                    missions: [
                        {
                            description: "This is some description",
                            id: "delta123",
                            manufacturers: ["Boeing", "SpaceX"],
                            name: "Mission Delta",
                            twitter: "https://twitter.com",
                            website: "https://google.com",
                            wikipedia: "https://wikiepedia.com",
                        },
                        {
                            description: "This is another description",
                            id: "alpha123",
                            manufacturers: ["SSL"],
                            name: "Mission Alpha",
                            twitter: "https://twitter.com",
                            website: "https://google.com",
                            wikipedia: "https://wikiepedia.com",
                        },
                    ] as IMission[],
                },
            },
        },
    ];

    const errorMock = [
        {
            request: {
                query: GET_MISSIONS,
            },
            error: new Error("An error occurred"),
        },
    ];

    test("Should render the page heading", () => {
        render(
            <MockedProvider mocks={successMock} addTypename={false}>
                <MissionTracker />
            </MockedProvider>
        );
        const heading = screen.getByText("SpaceX Mission Tracker");
        expect(heading).toBeInTheDocument();
    });

    test("Should render loading indicator while waiting for the query", () => {
        act(() => {
            render(
                <MockedProvider mocks={successMock} addTypename={false}>
                    <MissionTracker />
                </MockedProvider>,
            );
        });
        const loadingIndicator = screen.getByTestId("loadingIndicator");
        expect(loadingIndicator).toBeInTheDocument();
    });

    test("Should render missions once the query completes", async () => {
        await act(async() => {
            render(
                <MockedProvider mocks={successMock} addTypename={false}>
                    <MissionTracker />
                </MockedProvider>,
            );
        });
        await waitFor(() => screen.getByText("Mission Delta"));
        const mission = screen.getByText("Mission Delta");
        expect(mission).toBeInTheDocument();
    });

    test("Should render an error message for a network error", async () => {
        await act(async() => {
            render(
                <MockedProvider mocks={errorMock} addTypename={false}>
                    <MissionTracker />
                </MockedProvider>,
            );
        });
        await waitFor(() => screen.getByText("There was an error querying the data. Please try again later."));
        const error = screen.getByText("There was an error querying the data. Please try again later.");
        expect(error).toBeInTheDocument();
    });
});
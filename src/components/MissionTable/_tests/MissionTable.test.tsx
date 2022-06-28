import { render, screen } from "@testing-library/react";
import { IMission } from "../../../_type_helpers/IMission";

import MissionTable from "../index";

describe("MissionTable", () => {
    const missions: IMission[] = [
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
    ];

    test("Should render the table", () => {
        render(<MissionTable missions={missions}/>);
        const missionTable = screen.getByTestId("missionTable");
        expect(missionTable).toBeInTheDocument();
    });

    test("Should render the table headings", () => {
        render(<MissionTable missions={missions}/>);
        const name = screen.getByText("Name");
        expect(name).toBeInTheDocument();
        const description = screen.getByText("Description");
        expect(description).toBeInTheDocument();
        const manufacturers = screen.getByText("Manufacturers");
        expect(manufacturers).toBeInTheDocument();
        const website = screen.getAllByText("Website")[0];
        expect(website).toBeInTheDocument();
        const twitter = screen.getAllByText("Twitter")[0];
        expect(twitter).toBeInTheDocument();
        const wikipedia = screen.getAllByText("Wikipedia")[0];
        expect(wikipedia).toBeInTheDocument();
    });

    test("Should display all missions", () => {
        render(<MissionTable missions={missions}/>);
        const missionOne = screen.getByText("Mission Delta");
        expect(missionOne).toBeInTheDocument();
        const missionTwo = screen.getByText("Mission Alpha");
        expect(missionTwo).toBeInTheDocument();
    });

    test("Should display a message if no sorted missions are found", () => {
        render(<MissionTable missions={[]}/>);
        const message = screen.getByText("No results match this search criteria.");
        expect(message).toBeInTheDocument();
    });
});
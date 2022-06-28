import { render, screen } from "@testing-library/react";
import { IMission } from "../../../_type_helpers/IMission";

import MissionTableRow from "../index";

describe("MissionTableRow", () => {
    const mission: IMission = {
        description: "This is some description",
        id: "delta123",
        manufacturers: ["Boeing", "SpaceX"],
        name: "Mission Delta",
        twitter: "https://twitter.com",
        website: "https://google.com",
        wikipedia: "https://wikiepedia.com",
    };
    

    test("Should render all fields for the given mission", () => {
        render(
            <table>
                <tbody>
                    <MissionTableRow mission={mission}/>
                </tbody>
            </table>
        );
        const name = screen.getByText("Mission Delta");
        expect(name).toBeInTheDocument();
        const description = screen.getByText("This is some description");
        expect(description).toBeInTheDocument();
        const manufacturers = screen.getByText("Boeing, SpaceX");
        expect(manufacturers).toBeInTheDocument();
        const website = screen.getByText("Website");
        expect(website).toBeInTheDocument();
        expect(website).toHaveAttribute("href", "https://google.com");
        const twitter = screen.getByText("Twitter");
        expect(twitter).toBeInTheDocument();
        expect(twitter).toHaveAttribute("href", "https://twitter.com");
        const wikipedia = screen.getByText("Wikipedia");
        expect(wikipedia).toBeInTheDocument();
        expect(wikipedia).toHaveAttribute("href", "https://wikiepedia.com");
    });
});
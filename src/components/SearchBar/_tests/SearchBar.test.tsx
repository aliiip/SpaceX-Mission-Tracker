import { fireEvent, render, screen } from "@testing-library/react";

import SearchBar from "../index";
import { IMission } from "../../../_type_helpers/IMission";

describe("SearchBar", () => {
    const fullMissionsList: IMission[] = [
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
    ]
    test("Should render the search bar", async () => {
        render(<SearchBar setSortedMissions={jest.fn()} fullMissionsList={fullMissionsList}/>);
        const searchBar = screen.getByTestId("searchBar");
        expect(searchBar).toBeInTheDocument();
    });

    test("Should save the user's search value from the input field ", async () => {
        render(<SearchBar setSortedMissions={jest.fn()} fullMissionsList={fullMissionsList}/>);
        const topicToSearch = screen.getByTestId("topicToSearch");
        fireEvent.change(topicToSearch, { target: { value: "Some Topic" } });
        fireEvent.click(screen.getByText("Search"));
        expect(topicToSearch).toHaveValue("Some Topic");
    });
});
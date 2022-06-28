import { gql } from "@apollo/client";

export const GET_MISSIONS = gql`
    {
        missions {
            description
            id
            name
            twitter
            website
            wikipedia
            manufacturers
        }
    }
`;
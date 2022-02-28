import { gql } from "@apollo/client";

export const INFO_PERSON = gql`
  query {
    characters {
      results {
        name
        species
        gender
        image
        status
        location {name}  
        episode {name}
      }
    }
  }
`;



// export default {INFO_PERSON};
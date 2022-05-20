import { request, gql } from "graphql-request";

const endpoint = process.env.REACT_APP_API_URL

export const getMembers = async () => {
  const query = gql`
    query MyQuery {
      members {
        name
        role
        image {
          url
        }
      }
    }
  `;

  const result = await request(endpoint, query);
  return result.members;
};

export const getActions = async () => {
  const query = gql`
    query MyQuery {
      actions {
        title
        date
        images {
          url
        }
      }
    }
  `;

  const result = await request(endpoint, query);
  return result.actions;
};

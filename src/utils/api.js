import { request, gql } from "graphql-request";

const endpoint =
  "https://api-eu-central-1.graphcms.com/v2/cl2njjpd02tck01xugf2r2sc1/master";

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

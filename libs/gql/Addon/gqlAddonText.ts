export const gqlAddonText = `
  id
  __typename
  Title
  Button{
    Text
    Url{
      data{
        attributes{
          Url
        }
      }
    }
  }
  `;


export const gqlAddonText = `
{
    id
    __typename
    Title
    Button{
      Text
      page{
        data{
          attributes{
            Url
          }
        }
      }
    }
}`

import { gql } from "@apollo/client";

const addonImage = `
    ...on ComponentAddonImage{
        id
        __typename
        Image{
          data{
            attributes{
              previewUrl
              url
              alternativeText
              caption
            }
          }
        }
    }`

const addonText = `
    ... on ComponentAddonText{
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

export const getPages = {
    query: gql`
      query {
        pages{
            data{
              id,
              attributes{
                Name
                Url
                PageRows{
                  data{
                    id
                    attributes{
                      Addons{
                        __typename
                        ${addonImage}
                        ${addonText}
                      }
                    }
                  }
                }
              }
            }
          }
      }
    `,
}

export const getPagesMeta = {
    query: gql`
      query {
        pages{
            data{
              id,
              attributes{
                Name
                Url
              }
            }
          }
      }
    `,
}


export const getPage = (itemId: string) => ({
    query: gql`
      query getPage($itemId: ID!) {
        page(id:$itemId){
            data{
              id,
              attributes{
                Name
                Url
                PageRows{
                  data{
                    id
                    attributes{
                      Addons{
                        __typename
                      }
                    }
                  }
                }
              }
            }
          }
      }
    `,
    variables: { itemId }
});
import { gql } from "@apollo/client";
import { gqlAddonImage, gqlAddonText } from '@/libs/gql/Addon';

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
                        ... on ComponentAddonImage
                        ${gqlAddonImage}
                        ... on ComponentAddonText
                        ${gqlAddonText}
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
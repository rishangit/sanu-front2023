import { gql } from "@apollo/client";
import { gqlAddonImage, gqlAddonText, gqlAddonMenu } from '../Addon'

const header = `
Header{
  data{
    id
    attributes{
      Height
      BackgroundColor{
        BaseColor
        ColorWeight
      }
      TextColor{
        BaseColor
        ColorWeight
      }
      HeaderRows{
        data{
          id
          attributes{
            Addons{
              __typename
              ... on ComponentAddonImage
              ${gqlAddonImage}
              ... on ComponentAddonText
              ${gqlAddonText}
              ... on ComponentAddonMenu
              ${gqlAddonMenu}
            }
          }
        }
      }
    }
  }
}
`

export const GetSettingQuery = {
  query: gql`
      query {
        setting {
          data {
            id
            attributes {
              ${header}
              Theme {
                data {
                  attributes {
                    Name
                    Button {
                      BackgroundColor {
                        BaseColor
                        ColorWeight
                      }
                      TextColor {
                        BaseColor
                        ColorWeight
                      }
                      BackgroundHoverColor {
                        BaseColor
                        ColorWeight
                      }
                      TextHoverColor {
                        BaseColor
                        ColorWeight
                      }
                      Padding {
                        PaddingTop
                        PaddingBottom
                        PaddingLeft
                        PaddingRight
                      }
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
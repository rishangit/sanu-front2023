import { gql } from "@apollo/client";
import { Image, Url } from '../primitives'

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
      Logo{
        DesktopImage{${Image}}
        MobileImage{${Image}}
        AlterText
        Width
        Url{${Url}}
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
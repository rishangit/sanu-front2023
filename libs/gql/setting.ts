import { gql } from "@apollo/client";

export const GetSettingQuery = {
    query: gql`
      query {
        setting {
          data {
            id
            attributes {
              theme {
                data {
                  attributes {
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
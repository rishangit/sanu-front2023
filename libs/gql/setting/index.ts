import { gql } from "@apollo/client";
import { gqlPageRow } from '@/libs/gql/pages/pageRow'
import { gqlColor, gqlPadding } from '@/libs/gql/primitives'

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
      PageRows{
        ${gqlPageRow}
      }
    }
  }
}
`;

export const queryGetSetting = {
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
                      BackgroundColor {${gqlColor}}
                      TextColor {${gqlColor}}
                      BackgroundHoverColor {${gqlColor}}
                      TextHoverColor {${gqlColor}}
                      Padding {${gqlPadding}}
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
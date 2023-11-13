import { gql } from "@apollo/client";
import { gqlAdvanceSetting } from '@/libs/gql/Complex';
import { gqlPageRow } from '@/libs/gql/pages/pageRow';

export const queryGetPages = {
  query: gql`
    query {
      pages{
          data{
            id,
            attributes{
              Name
              Url
              PageRows{
                ${gqlPageRow}
              }
            }
          }
        }
    }
  `,
};

// export const getPage = (itemId: string) => ({
//   query: gql`
//       query getPage($itemId: ID!) {
//         page(id:$itemId){
//             data{
//               id,
//               attributes{
//                 Name
//                 Url
//                 PageRows{
//                   data{
//                     id
//                     attributes{
//                       AdvanceSetting{${gqlAdvanceSetting}}
//                       Addons{
//                         __typename
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//       }
//     `,
//   variables: { itemId }
// });
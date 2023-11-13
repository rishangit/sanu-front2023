import { gqlColor, gqlPadding, gqlAlign, gqlWidth, gqlHeight } from '../primitives';

export const gqlAdvanceSetting = `
  BackgroundColor{${gqlColor}}
  Padding{${gqlPadding}}
  Align{${gqlAlign}}
  Width{${gqlWidth}}
  Height{${gqlHeight}}
`;

export const gqlSetting = `
  Desktop{${gqlAdvanceSetting}}
  Tablet{${gqlAdvanceSetting}}
  Mobile{${gqlAdvanceSetting}}
`
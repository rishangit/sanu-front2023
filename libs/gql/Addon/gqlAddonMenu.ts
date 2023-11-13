import { gqlComplexMenu } from '../Complex';
import { gqlColor } from '../primitives';

export const gqlAddonMenu = `
  id
  __typename
  TextColor{${gqlColor}}
  TextHoverColor{${gqlColor}}
  Items{ ${gqlComplexMenu}}
  `;

import { gqlUrl } from '../primitives';

export const gqlComplexMenu = `
  id
  Item{
      Text
      Url {${gqlUrl}}
  }
  Children{
      Text
      Url {${gqlUrl}}
  }
`;
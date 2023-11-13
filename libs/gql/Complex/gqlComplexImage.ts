import { gqlImage, gqlUrl } from '../primitives';

export const gqlComplexImage = `
  DesktopImage{${gqlImage}}
  MobileImage{${gqlImage}}
  AlterText
  Width
  Url{${gqlUrl}}
`;
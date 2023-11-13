import { gqlAddonImage } from './gqlAddonImage';
import { gqlAddonText } from './gqlAddonText';
import { gqlAddonMenu } from './gqlAddonMenu';

export const gqlAllAddons = `
  __typename
  ... on ComponentAddonImage
  {${gqlAddonImage}}
  ... on ComponentAddonText
  {${gqlAddonText}}
  ... on ComponentAddonMenu
  {${gqlAddonMenu}}
`;
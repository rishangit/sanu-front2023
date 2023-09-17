import { gqlComplexImage } from '../Complex';

export const gqlAddonImage = `
    {
        id
        __typename
        Image{${gqlComplexImage}}
    }`

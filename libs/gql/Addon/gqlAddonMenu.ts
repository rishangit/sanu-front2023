import { gqlComplexImage, gqlComplexMenu } from '../Complex';
import { Image, Url } from '../primitives'

export const gqlAddonMenu = `
    {
        id
        __typename
        Items{ ${gqlComplexMenu}}
    }`

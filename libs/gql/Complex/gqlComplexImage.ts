import { Image, Url } from '../primitives'

export const gqlComplexImage = `
    DesktopImage{${Image}}
    MobileImage{${Image}}
    AlterText
    Width
    Url{${Url}}
`
import { Url } from '../primitives'

export const gqlComplexMenu = `
    id
    Item{
        Text
        Url {${Url}}
    }
    Children{
        Text
        Url {${Url}}
    }
`
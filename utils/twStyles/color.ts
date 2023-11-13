import { PrimitiveColor, Setting } from "../types";
import { splitter } from './constant';


export const twBgColorGenerator = (Color: PrimitiveColor|undefined): string => {
    if (!Color || !Color.BaseColor)
        return '';
    return twColorGenerator('bg', Color)
}

export const twTextColorGenerator = (Color: PrimitiveColor): string => {
    if (!Color || !Color.BaseColor)
        return '';
    return twColorGenerator('text', Color)
}

const twColorGenerator = (style: string, { BaseColor, ColorWeight }: any = { BaseColor: '', ColorWeight: '' }): string => {
    if (!BaseColor && !ColorWeight)
        return '';
    let color = '';
    if (BaseColor.toLowerCase() === 'black' ||
        BaseColor.toLowerCase() === 'white'
    ) {
        color = BaseColor.toLowerCase()
    }
    else
        color = `${BaseColor.toLowerCase()}-${ColorWeight.split(splitter)[1]}`

    return `${style}-${color}`;
}


export const twSettingColorGenerator = (setting: Setting | undefined): string => {
    if (!setting)
        return '';
    let str = ''
    if (setting?.Desktop?.BackgroundColor) {
        str = str + `${twBgColorGenerator(setting?.Desktop?.BackgroundColor)} `
    }
    if (setting?.Tablet?.BackgroundColor) {
        str = str + `md:${twBgColorGenerator(setting?.Tablet?.BackgroundColor)} `
    }
    if (setting?.Mobile?.BackgroundColor) {
        str = str + `sm:${twBgColorGenerator(setting?.Mobile?.BackgroundColor)} `
    }
    return str
}
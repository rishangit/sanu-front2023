import { PrimitivePadding, Setting } from "../types";
import { splitter } from "./constant";

export const twPaddingGenerator = (padding: PrimitivePadding = {}) => {
    let classList = [];
    if (!padding)
        return '';

    if (padding.PaddingTop == padding.PaddingBottom) {
        classList.push(padding.PaddingTop ? `py-${padding.PaddingTop?.split(splitter)[1]}` : '');
    } else {
        classList.push(padding.PaddingTop ? `pt-${padding.PaddingTop?.split(splitter)[1]}` : '');
        classList.push(padding.PaddingBottom ? `pb-${padding.PaddingBottom?.split(splitter)[1]}` : '');
    }

    if (padding.PaddingLeft == padding.PaddingRight) {
        classList.push(padding.PaddingLeft ? `px-${padding.PaddingLeft?.split(splitter)[1]}` : '');
    } else {
        classList.push(padding.PaddingLeft ? `pl-${padding.PaddingLeft?.split(splitter)[1]}` : '');
        classList.push(padding.PaddingRight ? `pr-${padding.PaddingRight?.split(splitter)[1]}` : '');
    }

    const classString = classList.map(item => item).join(' ');
    return classString;
}

export const twSettingPaddingGenerator = (setting: Setting | undefined): string => {
    if (!setting)
        return '';
    let str = ''
    if (setting?.Desktop?.Padding) {
        str = str + `${twPaddingGenerator(setting?.Desktop?.Padding)} `
    }
    if (setting?.Tablet?.Padding) {
        str = str + `md:${twPaddingGenerator(setting?.Tablet?.Padding)} `
    }
    if (setting?.Mobile?.Padding) {
        str = str + `sm:${twPaddingGenerator(setting?.Mobile?.Padding)} `
    }
    return str
}
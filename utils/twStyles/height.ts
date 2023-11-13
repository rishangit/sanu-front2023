import { Setting } from "../types";
import { splitter } from './constant';

export const twSettingHeightGenerator = (setting: Setting | undefined): string => {
    if (!setting)
        return '';

    let str = ''
    if (setting.Desktop?.Height) {
        str = str + `min-h-${setting.Desktop?.Height.Height?.split(splitter)[1]} `
    }
    if (setting.Tablet?.Height) {
        str = str + `md:min-h-${setting.Tablet?.Height.Height?.split(splitter)[1]} `
    }
    if (setting.Mobile?.Height) {
        str = str + `sm:min-h-${setting.Mobile?.Height.Height?.split(splitter)[1]} `
    }
    return str
}

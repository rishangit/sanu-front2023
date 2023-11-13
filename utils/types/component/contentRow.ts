import { Setting } from "../common/setting"

export interface ContentRow {
    id?:string;
    Setting?: Setting;
    AddonContents?: any;
}
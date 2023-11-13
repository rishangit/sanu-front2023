import { PrimitiveColor, PrimitiveAlign, PrimitivePadding, PrimitiveWidth, PrimitiveHeight } from "../primitives"

export interface AdvaceSetting{
    BackgroundColor?:PrimitiveColor;
    Align?:PrimitiveAlign;
    Height?:PrimitiveHeight;
    Padding?:PrimitivePadding;
    Width?:PrimitiveWidth;
}

export interface Setting {
    Desktop?:AdvaceSetting;
    Mobile?: AdvaceSetting;
    Tablet?:AdvaceSetting;
}
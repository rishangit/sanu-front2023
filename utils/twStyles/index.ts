import {  PrimitiveAlign} from '@/utils/types/primitives';
import { ContentFlow } from '@/utils/types/common';
import { primitiveAlign } from '@/utils/twStyles/constant';

export * from './height';
export * from './color';
export * from './padding';

export const twAlignGenerator = (flow: ContentFlow, align: PrimitiveAlign): string => {
    let str = ''
    if (!align)
        align = primitiveAlign
    const { HorizontalAlign, VerticalAlign } = align;
    if (flow === ContentFlow.ROW) {
        switch (HorizontalAlign?.toLocaleLowerCase()) {
            case 'center':
                str = `${str} justify-center`;
                break;
            case 'left':
                str = `${str} justify-start`;
                break;
            case 'right':
                str = `${str} justify-end`;
                break;
            default:
                str = `${str} justify-center`
                break;
        }

        switch (VerticalAlign?.toLocaleLowerCase()) {
            case 'center':
                str = `${str} items-center`;
                break;
            case 'top':
                str = `${str} items-start`;
                break;
            case 'bottom':
                str = `${str} items-end`;
                break;
            default:
                str = `${str} items-center`;
                break;
        }
    } else if (flow === ContentFlow.COLUMN) {


    }

    return str
}

export const twWidthGenerator = (props: any = {}) => {
    if (!props || !props.Width)
        return ''

    const number = props.Width?.replace('W_', '').replace('_', '/');
    return `w-${number}`;

}


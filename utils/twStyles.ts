const splitter = '_';

export const twColorGenerator = (style: string, { BaseColor, ColorWeight }: any): string => {
    return `${style}-${BaseColor.toLowerCase()}-${ColorWeight.split(splitter)[1]}`;
}

export const twPaddingGenerator = (padding: any) => {
    let classList = [];
    if (padding.PaddingTop == padding.PaddingBottom) {
        classList.push(`py-${padding.PaddingTop.split(splitter)[1]}`);
    } else {
        classList.push(`pt-${padding.PaddingTop.split(splitter)[1]}`);
        classList.push(`pb-${padding.PaddingBottom.split(splitter)[1]}`);
    }

    if (padding.PaddingLeft == padding.PaddingRight) {
        classList.push(`px-${padding.PaddingLeft.split(splitter)[1]}`);
    } else {
        classList.push(`pl-${padding.PaddingLeft.split(splitter)[1]}`);
        classList.push(`pr-${padding.PaddingRight.split(splitter)[1]}`);
    }

    const classString = classList.join(' ');
    return classString;
}
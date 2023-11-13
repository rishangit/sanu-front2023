"use client";
import Link from "next/link";
import {
  twPaddingGenerator,
  twBgColorGenerator,
  twTextColorGenerator,
} from "@/utils/twStyles";
import getContextData from "@/libs/context/getContext";

const LinkButton = ({ data }: any) => {
  const contextData = getContextData();
  const { Button } = contextData.getTheme();

  const bgColor: string = twBgColorGenerator(Button.BackgroundColor);
  const bgHoverColor: string = twBgColorGenerator(Button.BackgroundHoverColor);
  const textColor: string = twTextColorGenerator(Button.TextColor);
  const textHoverColor: string = twTextColorGenerator(Button.TextHoverColor);
  const padding: string = twPaddingGenerator(Button.Padding);

  return (
    <div
      className={`
    inline-block 
    text-center 
    justify-center 
    cursor-pointer
    rounded-md
    ${padding}
    ${bgColor} 
    ${textColor} 
    hover:${bgHoverColor} 
    hover:${textHoverColor}`}
    >
      <Link href={`/${data.Url.data?.attributes.Url}`}>{data.Text}</Link>
    </div>
  );
};

export default LinkButton;

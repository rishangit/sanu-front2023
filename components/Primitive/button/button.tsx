"use client";
import {
  twBgColorGenerator,
  twTextColorGenerator,
  twPaddingGenerator,
} from "@/utils/twStyles";
import getContextData from "@/libs/context/getContext";

export default function Button({ children }: any) {
  const contextData = getContextData();
  const { Button } = contextData.getTheme();

  const bgColor = twBgColorGenerator(Button.BackgroundColor);
  const bgHoverColor = twBgColorGenerator(Button.BackgroundHoverColor);
  const textColor = twTextColorGenerator(Button.TextColor);
  const textHoverColor = twTextColorGenerator(Button.TextHoverColor);
  const padding = twPaddingGenerator(Button.Padding);

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
      {children}
    </div>
  );
}

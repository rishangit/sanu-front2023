"use client";
import { twColorGenerator, twPaddingGenerator } from "@/utils/twStyles";
import getContextData from "@/libs/context/getContext";

export default function Button({ children }: any) {
  const contextData = getContextData();
  const { Button } = contextData.getTheme();

  const bgColor = twColorGenerator("bg", Button.BackgroundColor);
  const bgHoverColor = twColorGenerator(
    "bg",
    Button.BackgroundHoverColor
  );
  const textColor = twColorGenerator("text", Button.TextColor);
  const textHoverColor = twColorGenerator("text", Button.TextHoverColor);
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

"use client";
import getContextData from "@/libs/context/getContext";
import { twTextColorGenerator, twBgColorGenerator } from "@/utils/twStyles";
import ContentRow from "../ContentPage/contentRow";

const Header = () => {
  const contextData = getContextData();
  const { Height, BackgroundColor, TextColor, HeaderRows, PageRows } =
    contextData.getHeader();
  const bgColor = twBgColorGenerator(BackgroundColor);
  const textColor = twTextColorGenerator(TextColor);
  return (
    <div
      style={{ height: `${Height}px` }}
      className={`flex h-full flex-col items-center ${bgColor} ${textColor}`}
    >
      {PageRows.data.map((row: any) => (
        <ContentRow key={row.id} row={row} />
      ))}
    </div>
  );
};

export default Header;

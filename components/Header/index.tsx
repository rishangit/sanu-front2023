"use client";
import getContextData from "@/libs/context/getContext";
import { twColorGenerator } from "@/utils/twStyles";
import ContentRow from "../ContentPage/contentRow";

const Header = () => {
  const contextData = getContextData();
  const { Height, BackgroundColor, HeaderRows } = contextData.getHeader();
  const bgColor = twColorGenerator("bg", BackgroundColor);
  return (
    <div
      style={{ height: `${Height}px` }}
      className={`flex items-center px-3 ${bgColor}`}
    >
      {HeaderRows.data.map((row: any) => (
        <ContentRow key={row.id} row={row} />
      ))}
    </div>
  );
};

export default Header;

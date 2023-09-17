"use client";
import getContextData from "@/libs/context/getContext";
import { Image as CoreImage } from "@/components/Primitive";
import Link from "next/link";
import { twColorGenerator } from "@/utils/twStyles";

const Header = () => {
  const contextData = getContextData();
  const { Height, Logo, BackgroundColor } = contextData.getHeader();
  const bgColor = twColorGenerator("bg", BackgroundColor);
  return (
    <div
      style={{ height: `${Height}px` }}
      className={`flex items-center px-3 ${bgColor}`}
    >
      <div style={{ width: `${Logo.Width}px` }} className="cursor-pointer">
        <Link href={`/${Logo.Url.data.attributes.Url}`}>
          <CoreImage
            src={`${process.env.NEXT_PUBLIC_SERVER}${Logo.DesktopImage.data.attributes.url}`}
            alt={Logo.AlterText}
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;

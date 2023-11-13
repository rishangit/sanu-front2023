import { twBgColorGenerator, twTextColorGenerator } from "@/utils/twStyles";
import getContextData from "@/libs/context/getContext";
import Link from "next/link";

function Menu({ data }: any) {
  const { Items, TextColor, TextHoverColor } = data;
  const contextData = getContextData();
  const { Height, BackgroundColor } = contextData.getHeader();
  const bgColor = twBgColorGenerator(BackgroundColor);
  const textColor = twTextColorGenerator(TextColor);
  const textHoverColor = twTextColorGenerator(TextHoverColor);
  return (
    <div className="flex h-full">
      {Items?.map(({ Item, Children }: any, index: string) => (
        <div
          key={index}
          className={`relative h-full group  px-3 ${textColor} hover:${textHoverColor} cursor-pointer`}
        >
          <Link href={`/${Item.Url.data.attributes.Url}`}>{Item.Text}</Link>
          <div
            className={`absolute group-hover:inline-block hidden top-6 p-3 left-0 ${bgColor}`}
            style={{ minWidth: "500px" }}
          >
            {Children?.map((SubItem: any, subIndex: string) => (
              <div key={subIndex}
                className={`px-3 py-2 ${textColor} hover:${textHoverColor} cursor-pointer`}
              >
                <Link href={`/${SubItem.Url.data.attributes.Url}`}>
                  {SubItem.Text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;

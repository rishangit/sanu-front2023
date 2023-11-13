"use client";
import React from "react";
import ContentColumn from "../contentColumn";
import type { ContentRow, Setting } from "@/utils/types";
import {
  twSettingHeightGenerator,
  twSettingColorGenerator,
  twSettingPaddingGenerator,
} from "@/utils/twStyles";
import {
  twAlignGenerator,
  twBgColorGenerator,
  twPaddingGenerator,
  twWidthGenerator,
} from "@/utils/twStyles";
import { ContentFlow } from "@/utils/types/common";

const ContentRow = (props: any) => {
  console.log("props", props);
  const row: ContentRow = props.row.attributes;
  const addonContents: any = row.AddonContents?.data;
  const setting: Setting | undefined = row.Setting;

  // const { AdvanceSetting, AdvanceSettingTab, AdvanceSettingMobile, Addons } = row.attributes;
  // const bgColor = twBgColorGenerator(AdvanceSetting?.BackgroundColor);
  // const padding = twPaddingGenerator(AdvanceSetting?.Padding);
  // const Align = twAlignGenerator(ContentFlow.ROW, AdvanceSetting?.Align);
  // const width = twWidthGenerator(AdvanceSetting?.Width);

  // const bgColorTab = twBgColorGenerator(AdvanceSettingTab?.BackgroundColor);
  // const paddingTab = twPaddingGenerator(AdvanceSettingTab?.Padding);
  // const AlignTab = twAlignGenerator(ContentFlow.ROW, AdvanceSettingTab?.Align);
  // const widthTab = twWidthGenerator(AdvanceSettingTab?.Width);

  // const bgColorMobile = twBgColorGenerator(AdvanceSettingMobile?.BackgroundColor);
  // const paddingMobile = twPaddingGenerator(AdvanceSettingMobile?.Padding);
  // const AlignMobile = twAlignGenerator(ContentFlow.ROW, AdvanceSettingMobile?.Align);
  // const widthMobile = twWidthGenerator(AdvanceSettingMobile?.Width);

  const height = twSettingHeightGenerator(setting);
  const color = twSettingColorGenerator(setting);
  const padding = twSettingPaddingGenerator(setting)
  return (
    <div
      className={`${height}${color}${padding}`}
      // className={`flex flex-1
      // // ${bgColor} ${padding} ${Align} ${width ?? 'w-full'}
      // // md:${bgColorTab} md:${paddingTab} md:${AlignTab} md:${widthTab ?? 'w-full'}
      // // sm:${bgColorMobile} sm:${paddingMobile} sm:${AlignMobile} sm:${widthMobile ?? 'w-full'}
      //   // `
      // }
    >
      {addonContents.map((addonContent: any, index: number) => (
        <ContentColumn key={index} addonContent={addonContent} />
      ))}
    </div>
  );
};

export default ContentRow;

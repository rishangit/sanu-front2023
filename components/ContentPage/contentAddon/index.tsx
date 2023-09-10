import React from "react";
import { Image, Text } from "@/components/addons";

const ContentAddon = ({ addon }: any) => {
  const drawAddon = () => {
    switch (addon.__typename) {
      case "ComponentAddonText":
        return <Text data={addon}/>;

      case "ComponentAddonImage":
        return <Image data={addon}/>;

      default:
        break;
    }
  };

  return <div>{drawAddon()}</div>;
};

export default ContentAddon;

import React from "react";
import ContentAddon from "../contentAddon";

const ContentColumn = ({ addonContent }: any) => {
  const addon = addonContent.attributes.Desktop[0];
  
  return (
    <div className="flex justify-center items-center">
      <ContentAddon addon={addon} />
    </div>
  );
};

export default ContentColumn;

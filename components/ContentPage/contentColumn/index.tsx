import React from "react";
import ContentAddon from "../contentAddon";

const ContentColumn = ({ addon }: any) => {
  return (
    <div className="flex justify-center flex-1 items-center">
      <ContentAddon addon={addon} />
    </div>
  );
};

export default ContentColumn;

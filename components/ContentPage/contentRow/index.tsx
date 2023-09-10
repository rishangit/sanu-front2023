import React from "react";
import ContentColumn from "../contentColumn";

const ContentRow = ({ row }: any) => {
  return (
    <div className="border-solid border flex justify-center items-center">
      {row.attributes.Addons.map((addon: any) => (
        <ContentColumn addon={addon}/>
      ))}
    </div>
  );
};

export default ContentRow;

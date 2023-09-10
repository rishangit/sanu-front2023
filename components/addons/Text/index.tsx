import React from "react";
import { LinkButton } from "@/components/Primitive";
const Text = ({ data }: any) => {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center items-center">{data.Title}</div>
      <LinkButton>{data.Button.Text}</LinkButton>
    </div>
  );
};

export default Text;

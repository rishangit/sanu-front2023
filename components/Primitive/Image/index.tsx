import React from "react";

const Image = ( props : any) => {
  return (
    <div>
      <img src={`${process.env.NEXT_PUBLIC_SERVER}${props?.src}`} alt={props?.alt ?? ""}  />
    </div>
  );
};

export default Image;

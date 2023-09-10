"use client";
import React, { useState } from "react";
import { CoreContext } from "@/utils/coreContext";

function Provider(props: any) {
  const [coreState, setCoreState] = useState(props.data.apiData);

  return (
    <CoreContext.Provider value={{ coreState, setCoreState }}>
      {props.children}
    </CoreContext.Provider>
  );
}

export default Provider;

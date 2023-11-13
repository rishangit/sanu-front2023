
"use client";
import ContentRow from "./contentRow";

const ContentPage = ({ pageData }: any) => {


  return (
    <div className="flex flex-col">
      {pageData.attributes.PageRows.data.map((row: any) => (
        <ContentRow key={row.id} row={row} />
      ))}
    </div>
  );
};

export default ContentPage;

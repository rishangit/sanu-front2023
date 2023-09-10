import ContentRow from "./contentRow";

const ContentPage = ({ pageData }: any) => {
  return (
    <div>
      {pageData.attributes.PageRows.data.map((row: any) => (
        <ContentRow key={row.id} row={row} />
      ))}
    </div>
  );
};

export default ContentPage;

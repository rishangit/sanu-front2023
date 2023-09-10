import ContentPage from "@/components/ContentPage";
import client from "@/libs/apolloClient";
import { getPage, getPages } from "@/libs/gql";

export const getServerSideProps = async (params: any) => {
  const {
    data: { pages },
  } = await client.query(getPages);

  const pageData = pages.data.find(
    (data: any) => data.attributes.Url.toLowerCase() === params.id.toLowerCase()
  );
  return {
    apiData: {
      pageData,
    },
  };
};

const Page = async (params: any) => {
  const {
    apiData: { pageData },
  }: any = await getServerSideProps(params.params);
  return (
    <>
      <ContentPage pageData={pageData} />
    </>
  );
};

export default Page;

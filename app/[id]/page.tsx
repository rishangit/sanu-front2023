import ContentPage from "@/components/ContentPage";
import Header from "@/components/Header";
import client from "@/libs/apolloClient";
import { queryGetPages } from "@/libs/gql";

export const getServerSideProps = async (params: any) => {

  client.cache.evict({})
  const {
    data: { pages },
  } = await client.query(queryGetPages);
 
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
      <Header/>
      <ContentPage pageData={pageData} />
    </>
  );
};

export default Page;

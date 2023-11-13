import "./globals.css";
import Provider from "@/app/provider";
import client from "@/libs/apolloClient";
import { queryGetSetting, queryGetPages } from "@/libs/gql";

export async function getServerSideProps() {

  client.cache.evict({})
  const {
    data: { setting },
  } = await client.query(queryGetSetting)

  const {
    data: { pages },
  } = await client.query(queryGetPages);

  return {
    apiData: {
      setting,
      pages,
    },
  };
}

export default async function RootLayout(props: React.PropsWithChildren) {
  const apiData: any = await getServerSideProps();
  return (
    <html>
      <body>
          <Provider data={apiData}>{props.children}</Provider>
      </body>
    </html>
  );
}

import Link from "next/link";
import { Image as CoreImage } from "@/components/Primitive";

const Image = ({ data }: any) => {
  const width = data.Image.Width ? `${data.Image.Width}px` : "100%";

  return (
    <div style={{ width }}>
      <Link href={`/${data.Image.Url.data?.attributes.Url}`}>
        <CoreImage src={data.Image.DesktopImage.data.attributes.url} />
      </Link>
    </div>
  );
};

export default Image;

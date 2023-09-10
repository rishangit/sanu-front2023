import Image from "next/image";
import Button from "@/components/Primitive/button/button";
import ContentPage from "@/components/ContentPage";

export default function Home() {
  return (
    <div>
      <div></div>this is main page
      <ContentPage/>
      <Button>Click me</Button>
    </div>
  );
}

import HomeBody from "@/components/Home/HomeBody";
import Homepage from "@/components/Home/Homepage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Homepage />
      <div className="w-full">
        <HomeBody />
      </div>
    </div>
  );
}

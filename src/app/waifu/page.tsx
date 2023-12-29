import { TWaifuCategory } from "@/@types/WaifuCategory";
import useWaifu from "@/hooks/useWaifu";
import KitsuneMasonry from "./KitsuneMasonry";

export const metadata = {
  title: "Prism | Waifu",
};

async function page() {
  const { getManyWaifu } = useWaifu();
  let category: TWaifuCategory = "waifu";
  const waifuInfo = await getManyWaifu(category);

  return (
    <div className="m-2">
      <KitsuneMasonry waifuInfo={waifuInfo} />
    </div>
  );
}

export default page;

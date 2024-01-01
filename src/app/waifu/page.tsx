import { TWaifuCategory } from "@/@types/WaifuCategory";
import useWaifu from "@/hooks/useWaifu";
import KitsuneMasonry from "./KitsuneMasonry";
import Head from 'next/head';

async function page() {
  const { getManyWaifu } = useWaifu();
  let category: TWaifuCategory = "waifu";
  const waifuInfo = await getManyWaifu(category);

  return (
    <>
      <Head>
        <script async src="https://arc.io/widget.min.js#gM16djwH"></script>
      </Head>
    <div className="m-2">
      <KitsuneMasonry waifuInfo={waifuInfo} />
    </div>
    </>
  );
}

export default page;

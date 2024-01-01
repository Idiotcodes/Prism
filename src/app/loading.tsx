import React from "react";
import LoadingGIF from "@/assets/genkai.gif";
import Head from 'next/head';

function Loading() {
  return (
    <>
      <Head>
        <script async src="https://arc.io/widget.min.js#gM16djwH"></script>
      </Head>
    <div className="fixed w-screen h-screen top-0 bg-base-300 opacity-70">
      <img
        src={LoadingGIF.src}
        alt="loading..."
        width={100}
        height={100}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
    </>
  );
}

export default Loading;

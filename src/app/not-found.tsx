import React from "react";
import Head from 'next/head';

function not_found() {
  return (
    <>
      <Head>
        <script async src="https://arc.io/widget.min.js#gM16djwH"></script>
      </Head>
    <div className="flex justify-center items-center h-full">
      <div>Page Not Found</div>
    </div>
    </>
  );
}

export default not_found;

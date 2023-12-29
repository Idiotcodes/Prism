import React from "react";
import Image from "next/image";
import ErrorImage from "@/assets/error.gif";

export const metadata = {
  title: "Prism | Page not found",
};

function not_found() {
  return (
    <div className="fixed w-screen h-screen top-0 bg-base-300">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-5 items-center justify-center">
      <Image
        src={ErrorImage.src}
        alt="error"
        width={300}
        height={300}
        className=""
      />
      <p className="font-bold text-2xl">Page Not Found</p>
      </div>
    </div>
  );
}

export default not_found;

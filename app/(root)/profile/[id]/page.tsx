import Header from "@/components/Header";
import React from "react";

export default async function Page({ params }: ParamsWithSearch) {
  const { id } = await params;

  return (
    <div className="wrapper page">
      <Header
        subHeader="rafal.pro@gmail.com"
        title="Rafal"
        userImg="/assets/images/dummy.jpg"
      />
      <h1 className="text-wxl font-karla">USER ID: {id}</h1>
    </div>
  );
}

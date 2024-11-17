"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

import ProjectAdditionals from "../components/product_list/ProjectAdditionals";

export default function Product() {
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  return (
    <div style={{ width: "100%" }}>
      <h1>{id}</h1>
      <ProjectAdditionals />
    </div>
  );
}

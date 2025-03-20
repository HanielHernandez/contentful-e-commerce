"use client"
import { AlgoliaSearch } from "@/components/AlgoliaSearch";
import AlgoliaWrapper from "@/components/AlgoliaWrapper";


export function AlgoliaProcutSearch(){
  return (
    <AlgoliaWrapper>
      <AlgoliaSearch />
    </AlgoliaWrapper>
  );
}
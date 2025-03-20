import { algoliaClient } from "@/app/lib/algolia";
import { InstantSearch } from "react-instantsearch";

export interface AlgoliaWrapperProps {
  children: React.ReactNode
}


export default function AlgoliaWrapper({children}:AlgoliaWrapperProps) {
  return <InstantSearch searchClient={algoliaClient} indexName="elastic">{children}</InstantSearch>;
}
"use client";
import { algoliaClient } from "@/app/lib/algolia";
import { InstantSearch, Pagination } from "react-instantsearch";
import "instantsearch.css/themes/algolia.css";
import { AlgoliaSearch } from "@/components/AlgoliaSearch";
import { ProductList } from "@/components/ProductList";
import { ProductsRefinements } from "@/components/ProductsRefinements";
import { AtText } from "@/components/atoms/AtText";

export default function ProductsPage() {
  const visible = false;

  return (
    <div>
      <AtText variant="h2" className="my-6">
        Products
      </AtText>

      <InstantSearch
        searchClient={algoliaClient}
        indexName="elastic"
        routing={true}
      >
        {/* <SearchBox /> */}
        <div className=""></div>
        <AlgoliaSearch searchBarOnly />
        <div className="flex flex-col md:flex-row gap-4 py-6 ">
          <ProductsRefinements />
          <ProductList />
        </div>
        <Pagination />
      </InstantSearch>
    </div>
  );
}

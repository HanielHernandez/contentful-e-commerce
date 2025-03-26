"use client";
import { algoliaClient } from "@/app/lib/algolia";
import { InstantSearch } from "react-instantsearch";
import "instantsearch.css/themes/algolia.css";
import { AlgoliaSearch } from "@/components/AlgoliaSearch";
import { ProductList } from "@/components/ProductList";
import { ProductsRefinements } from "@/components/ProductsRefinements";
import { AtText } from "@/components/atoms/AtText";
import { ProductSort } from "@/components/ProductsSort";
import { ProductsPagination } from "@/components/blocks/ProductsPagination";

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-4">
      <AtText variant="h2" className="mb-6">
        Products
      </AtText>

      <InstantSearch
        searchClient={algoliaClient}
        indexName="elastic"
        routing={true}
      >
        <div className=""></div>
        <AlgoliaSearch searchBarOnly />
        <div className="flex flex-col md:flex-row gap-4 py-6 ">
          <ProductsRefinements />
          <div className="flex-flex-col gap-4">
            <ProductSort />
            <ProductList />
          </div>
        </div>
        <ProductsPagination />
      </InstantSearch>
    </div>
  );
}

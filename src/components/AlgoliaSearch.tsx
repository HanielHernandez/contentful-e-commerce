"use client";
import { useInfiniteHits, useSearchBox } from "react-instantsearch";
import { OrSiteSearch } from "./organism/OrSiteSearch";
import { useState } from "react";
import { MlProductItemProps } from "./molecules/MlProductItem";
import { OrProductList } from "./organism/OrPoductlist";

export interface AlgoliaSearchProps {
  searchBarOnly?: boolean;
}

export function AlgoliaSearch({ searchBarOnly = false }: AlgoliaSearchProps) {
  const { refine, query } = useSearchBox();
  const [inputValue, setInputValue] = useState(query);
  const { items, isLastPage, showMore } = useInfiniteHits();

  const onQueryChange = ({
    currentTarget: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
    refine(value);
  };
  return (
    <div>
      <OrSiteSearch
        onChange={onQueryChange}
        value={inputValue}
        results={
          searchBarOnly
            ? ""
            : query && (
                <OrProductList
                  isLastPage={isLastPage}
                  showMore={showMore}
                  products={items.map<MlProductItemProps>((item) => ({
                    images: item.images,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    objectID: item.id,
                    contentfulId: item.CONTENTFUL_ID,
                  }))}
                />
              )
        }
      />
    </div>
  );
}

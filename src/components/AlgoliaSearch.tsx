"use client";
import { useHits, useSearchBox } from "react-instantsearch";
import { OrSiteSearch } from "./organism/OrSiteSearch";
import { useState } from "react";
import { cleanContentfulEntry } from "@/utils/contentful";
import { MlProductItemProps } from "./molecules/MlProductItem";
import { Entry } from "contentful-management";
import { OrProductList } from "./organism/OrPoductlist";

export function AlgoliaSearch() {
  const { refine, query } = useSearchBox();

  const [inputValue, setInputValue] = useState(query);

  const { items } = useHits();

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
        results={query &&
          <OrProductList
            products={ items.map<MlProductItemProps>((item) =>({
              images: item.images,
              title: item.title,
              description: item.description,
              price: item.price,
              objectID: item.id,
              contentType: "Product",
              sys: {}
            })) }
          />
        }
      />
    </div>
  );
}

"use client";
import { useHits, useSearchBox } from "react-instantsearch";
import { OrSiteSearch } from "./organism/OrSiteSearch";
import { useState } from "react";
import { normalizeContentfulEntry } from "@/utils/contentful";
import { Entry } from "contentful-management";

export function AlgoliaSearch() {
  const { refine, query } = useSearchBox({});

  const [inputValue, setInputValue] = useState(query);

  const { items } = useHits();

  console.log(items)

  // function setQuery(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   const query = event.target;
  //   setInputValue(newQuery);

  //   refine(newQuery);
  // }

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
        results={JSON.stringify(items , null, 4)}
      />
    </div>
  );
}

import { FC } from "react";
import { useSortBy } from "react-instantsearch";
import { AtText } from "./atoms/AtText";

export const ProductSort: FC = () => {
  const { currentRefinement, options, refine } = useSortBy({
    items: [
      {
        value: "elastic_relevance",
        label: "Relevance",
      },
      {
        value: "elastic_title_desc",
        label: "Name Z-A",
      },
      {
        value: "elastic_title_asc",
        label: "Name A-Z",
      },
      {
        value: "elastic_price_desc",
        label: "Price, high to low",
      },
      {
        value: "elastic_price_asc",
        label: "Price, low to high",
      },
      {
        value: "elastic_rating_asc",
        label: "Rating, low to high",
      },
      {
        value: "elastic_rating_desc",
        label: "Rating, igh to low",
      },
    ],
  });

  return (
    <div className="flex flex-row md:justify-end items-center pb-4  gap-4 w-full">
      <AtText variant="h5">Sort By: </AtText>
      <select
        className="bg-neutral-300 px-4 py-3 rounded-md text-neutral-600"
        onChange={(event) => refine(event.target.value)}
        value={currentRefinement}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

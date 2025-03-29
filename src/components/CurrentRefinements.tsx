import React from "react";
import { useCurrentRefinements } from "react-instantsearch";
import { AtText } from "./atoms/AtText";

export const namesPerAttribute: { [key: string]: string } = {
  "categories.name": "Category",
  rating: "Rating",
  price: "Price",
};

function isModifierClick(event: React.MouseEvent) {
  const isMiddleClick = event.button === 1;

  return Boolean(
    isMiddleClick ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey
  );
}

export function CurrentRefinements() {
  const { items, refine } = useCurrentRefinements();

  return (
    <div className="flex flex-row flex-wrap">
      <ul className="">
        {items.map((item) => (
          <li
            key={[item.indexName, item.label].join("/")}
            className="mb-3 last:mb-0"
          >
            {item.refinements.map((refinement) => (
              <button
                key={refinement.label}
                role="button"
                onClick={(event) => {
                  if (isModifierClick(event)) {
                    return;
                  }

                  refine(refinement);
                }}
                className="flex items-center gap-2 rounded-full bg-neutral-200 px-2 py-1 cursor-pointer mb-3 last:mb-0"
              >
                <AtText variant="chip" className="">
                  {namesPerAttribute[refinement.attribute]}: {refinement.label}
                </AtText>

                <span className="material-icons ">close</span>
              </button>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

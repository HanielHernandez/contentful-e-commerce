import React from "react";
import { useCurrentRefinements } from "react-instantsearch";

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
      <ul>
        {items.map((item) => (
          <li key={[item.indexName, item.label].join("/")}>
            <span>{item.label}:</span>
            {item.refinements.map((refinement) => (
              <span key={refinement.label}>
                <span>{refinement.label}</span>
                <button
                  type="button"
                  onClick={(event) => {
                    if (isModifierClick(event)) {
                      return;
                    }

                    refine(refinement);
                  }}
                >
                  <span className="material-icons">close</span>
                </button>
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

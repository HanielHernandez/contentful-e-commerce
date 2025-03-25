import { useRefinementList } from "react-instantsearch";
import { AtText } from "./atoms/AtText";
import { AtCheckbox } from "./atoms/AtCheckbox";

export const ProductCategoryRefinement = () => {
  const { items, refine } = useRefinementList({
    attribute: "categories.name",
    operator: "or",
    sortBy: ["name:asc"],
  });

  return (
    <div className="">
      <AtText variant="h5" As="h5" className="mb-4 ">
        Categories:
      </AtText>
      <ul>
        {items.map((item) => (
          <li
            key={item.value}
            className="py-2 cursor-pointer last:pb-0 first:pt-0"
            onClick={() => refine(item.value)}
          >
            <AtCheckbox
              checked={item.isRefined}
              onChange={() => refine(item.value)}
            >
              <AtText className="truncate">
                {`${item.label} - ${item.count}`}
              </AtText>
            </AtCheckbox>
          </li>
        ))}
      </ul>
    </div>
  );
};

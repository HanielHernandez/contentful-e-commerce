import { useConnector } from "react-instantsearch";
import connectRatingMenu from "instantsearch.js/es/connectors/rating-menu/connectRatingMenu";

import type {
  RatingMenuConnectorParams,
  RatingMenuWidgetDescription,
} from "instantsearch.js/es/connectors/rating-menu/connectRatingMenu";
import { AtText } from "./atoms/AtText";

export type UseRatingMenuProps = RatingMenuConnectorParams;

export function useRatingMenu(props?: UseRatingMenuProps) {
  return useConnector<RatingMenuConnectorParams, RatingMenuWidgetDescription>(
    connectRatingMenu,
    props
  );
}

export function ProductRatingRefinement(props: UseRatingMenuProps) {
  const { items, refine, createURL } = useRatingMenu(props);

  return (
    <div className="flex flex-col">
      <AtText variant="h5" As="h5" className="mb-4">
        Rating:
      </AtText>
      <ul>
        {items.map((item) => (
          <li key={item.value} className="mb-2 last:mb-0">
            <a
              className="flex"
              aria-label={`${item.value} &amp; up`}
              href={createURL(item.value)}
              onClick={(event) => {
                event.preventDefault();

                refine(item.value);
              }}
            >
              {item.stars.map((isFilled, index) => (
                <span
                  key={index}
                  className={`material-icons ${
                    isFilled ? "text-yellow-400" : "text-gray-400"
                  }`}
                >
                  star
                </span>
              ))}
              <AtText>
                <span>{item.value} &amp; Up</span>
              </AtText>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

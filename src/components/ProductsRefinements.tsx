import clsx from "clsx";
import { AtButton } from "./atoms/AtButton";
import { AtText } from "./atoms/AtText";
import { CurrentRefinements } from "./CurrentRefinements";
import { ProductCategoryRefinement } from "./ProductCategoryRefinement";
import ProductPriceRefinement from "./ProductPriceRefinement";
import { ProductRatingRefinement } from "./ProductRatingRefinement";
import { useState } from "react";

export function ProductsRefinements() {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" ">
      <AtButton
        color="default"
        flat
        className="md:hidden !px-0"
        onClick={() => setVisible(!visible)}
      >
        Filters <span className="material-icons ml-2">tune</span>
      </AtButton>
      <div
        className={clsx(
          "transitions-all ease-in-out duration-300  top-0 left-0 right-0 md:w-80 flex flex-col gap-4 pt-4 fixed  md:translate-x-0 p-4 md:p-0 md:sticky md:top-[160px] bg-white w-screen h-screen z-60 md:z-0",

          visible ? "" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
          <AtText variant="h3" className="">
            Filters
          </AtText>

          <AtButton
            flat
            color="default"
            rounded
            onClick={() => setVisible(!visible)}
            className="md:hidden !p-2 w-10 h-10"
          >
            <span className="material-icons">close</span>
          </AtButton>
        </div>
        <CurrentRefinements />
        <ProductRatingRefinement attribute="rating" />
        <div className="border-b border-b-neutral-200"></div>
        <ProductCategoryRefinement />
        <div className="border-b border-b-neutral-200"></div>
        <ProductPriceRefinement attribute="price" precision={2} />
      </div>
    </div>
  );
}

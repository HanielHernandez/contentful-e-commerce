import { useHits } from "react-instantsearch";
import { MlProductCard, MlProductCardProps } from "./molecules/MlProductCard";
import Link from "next/link";

export const ProductList = () => {
  const { items } = useHits<MlProductCardProps>();

  return (
    <div className="grid w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  ">
      {items.map((item) => {
        return (
          <div className="md:p-4" key={item.CONTENTFUL_ID}>
            <Link
              href={`/products/${item.CONTENTFUL_ID}`}
              key={item.CONTENTFUL_ID}
            >
              <MlProductCard {...item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

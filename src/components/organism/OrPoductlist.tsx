import { useEffect, useRef } from "react";
import { MlProductItem, MlProductItemProps } from "../molecules/MlProductItem";
import Link from "next/link";

export interface ProductListProps {
  products: MlProductItemProps[];
  isLastPage: boolean;
  showMore: () => void;
}

export function OrProductList({
  products,
  isLastPage,
  showMore,
}: ProductListProps) {
  const sentinelRef = useRef(null);

  useEffect(() => {
    if (sentinelRef.current !== null) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLastPage) {
            showMore();
          }
        });
      });

      observer.observe(sentinelRef.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [isLastPage, showMore]);
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.objectID}>
            <Link href={`/products/{${product.contentfulId}}`}>
              <MlProductItem {...product} />
            </Link>
          </li>
        );
      })}

      <li aria-hidden="true" ref={sentinelRef}></li>
    </ul>
  );
}

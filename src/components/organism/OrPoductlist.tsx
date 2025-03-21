import { MlProductItem, MlProductItemProps } from "../molecules/MlProductItem";

export interface ProductListProps {
  products: MlProductItemProps[];
}

export function OrProductList({ products }: ProductListProps) {
  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product.objectID}>
            <MlProductItem {...product} />
          </li>
        );
      })}
    </ul>
  );
}

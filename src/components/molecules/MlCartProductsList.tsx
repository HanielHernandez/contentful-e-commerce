import { CartProduct } from "@/stores/products-store";
import { AtImage } from "../atoms/AtImage";

export type MlCartProductListProps = {
  products: CartProduct[];
};

export const MlCartProductList = ({ products }: MlCartProductListProps) => {
  return (
    <table>
      <tbody>
        {products.map((prod) => {
          return (
            <tr key={prod.CONTENTFUL_ID}>
              <td>
                <AtImage {...prod.images[0]} className="w-12 h-12" />
              </td>
              <td>{prod.title}</td>
              <td>{prod.price * prod.quantity}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

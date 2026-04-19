import './ProductCSS.css'
import type {FC} from "react";
import type {IProduct} from "../../models/IProducts.ts";

interface ProductProps {
    product: IProduct,
}

export const ProductComponent: FC<ProductProps> = ({product}) => {
    return (
        <div className={'product-card'}>
            <img src={product.images[0]} alt={product.title}/>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p className={'price'}>Price: {product.price}</p>
        </div>
    );
};
import './ProductCSS.css'
import type {FC} from "react";
import type {IProduct} from "../../models/IProducts.ts";
import {Reviews} from "../review-component/reviews/Reviews.tsx";
import {ProductGallery} from "../gallery-component/gallery/ProductGallery.tsx";

interface ProductProps {
    product: IProduct,
}

export const ProductComponent: FC<ProductProps> = ({product}) => {
    return (
        <div className={'product-card'}>
            <ProductGallery images={product.images} title={product.title} />
            <div className={'main-info'}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
            </div>

            <div className="product-details">
                <h3>Details:</h3>
                <p><b>Brand:</b> {product.brand}</p>
                <p><b>Category:</b> {product.category}</p>
                <p><b>SKU:</b> {product.sku}</p>
                <p><b>Weight:</b> {product.weight}g</p>
                <p><b>Dimensions:</b> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
            </div>

            <div className="shipping-info">
                <h3>Shipping-info:</h3>
                <p><b>Warranty:</b> {product.warrantyInformation}</p>
                <p><b>Shipping:</b> {product.shippingInformation}</p>
                <p><b>Status:</b> {product.availabilityStatus}</p>
                <p><b>Return Policy:</b> {product.returnPolicy}</p>
            </div>

            <p className={'price'}>Price: {product.price}</p>
            <div className="review-item">
                <h3>Reviews:</h3>
                <Reviews reviews={product.reviews}/>
            </div>

        </div>
    );
};
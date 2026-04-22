import type {FC} from "react";

interface IProductImageProps {
    url: string;
    alt: string
}


export const ProductImage: FC<IProductImageProps> = ({ url, alt }) => {
    return (
        <div className="image-wrapper">
            <img src={url} alt={alt} className="product-single-image" />
        </div>
    );
};
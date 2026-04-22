import './ProductGalleryCSS.css'
import { ProductImage } from "../image/ProductImage.tsx";
import type {FC} from "react";

interface IGalleryProps {
    images: string[];
    title: string;
}

export const ProductGallery: FC<IGalleryProps> = ({ images, title }) => {
    if (!images || images.length === 0) return null;

    const [mainImage, ...otherImages] = images;

    return (
        <div className="product-gallery-container">
            <div className="main-image-block">
                <ProductImage url={mainImage} alt={title} />
            </div>

            {otherImages.length > 0 && (
                <div className="thumbnails-list">
                    {otherImages.map((url, index) => (
                        <div key={index} className="thumbnail-wrapper">
                            <ProductImage
                                url={url}
                                alt={`${title} - view ${index + 2}`}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
import './ProductsCSS.css'
import {useEffect, useState} from "react";
import type {IProduct} from "../../models/IProducts.ts";
import {getProducts} from "../../services/service.ts";
import {ProductComponent} from "../product-component/ProductComponent.tsx";

export const ProductsComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getProducts();
            setProducts(response);
        }
        fetchData();
    },[])

    return (
        <div className="products-container">
            {
                products.map((product) => (
                    <ProductComponent product={product} key={product.id}/>
                ))
            }
        </div>
    );
};
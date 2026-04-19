import type {IProduct} from "../models/IProducts.ts";

export const getProducts = async (): Promise<IProduct[]> => {
    const res =  await fetch(import.meta.env.VITE_API_URL + '/products')
    const data = await res.json();
    return data.products;
}
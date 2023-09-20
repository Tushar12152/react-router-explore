import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";

const Product = () => {
    const product=useLoaderData();
    // console.log(products.products)
    const products=product.products
    return (
        <div>
                                                       
             <div className="w-[90%] mt-10 mx-auto grid md:grid-cols-2 gap-6 lg:grid-cols-3 ">
                 {
                    products.map(product=><ProductsCard key={product.id} product={product}></ProductsCard>)
                 }
             </div>
        </div>
    );
};

export default Product;
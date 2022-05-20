import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductArticles from "../components/ProductArticles";
import PlaceholderImg from "../assets/placeholder-img.png";

export default function ArticlePage() {
    const [product, setProduct] = useState({});
    const params = useParams();
    const url = `http://localhost:3000/products/?id=${params.productId}`;


    useEffect(() => {
        async function getProduct() {
            const response = await fetch(url);
            const responseData = await response.json();
            setProduct(responseData.data[0]);
        }
        getProduct();
    }, [url]);

    // Fetch  imgs
    function getImg(product) {
        if (product.Files?.length >= 1) {
            return product.Files[0]?.Uri;
        } 
    }


    return (
        <>
            <section className="page">
                <h1 className="page-title">Article Page</h1>
                
                <article className="article-box">  
                    <div className="article-img">
                        <img src={PlaceholderImg} alt=""
                        // {product.Files?.lenght ? product?.Files[0]?.Uri : getImg(product)} alt={product.Name} 
                        />
                    </div>           
                    <div className="article-details">
                        <h2>Product</h2>
                        <div className="details-section">
                            <p>Main Category</p>  
                            {/* <div className="badge-cntr">{getZones(product)}</div> */}
                        </div>
                        <p className="description line-clamp">Product description</p>
                        
                    </div>
                </article>     

                <ProductArticles product={product?.Id}/>
                    

            </section>
        </>
    );
}
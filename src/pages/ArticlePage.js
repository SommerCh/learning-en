import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductArticles from "../components/ProductArticles";

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

    // Fetch category imgs
    // function getImg(category) {
    //     if (category.Files?.length >= 1) {
    //         return category.Files[0]?.Uri;
    //     } 
    // }


    return (
        <>
            <section className="page">
                <h1 className="page-title">Article Page</h1>
                
                {/* <article className="article-box" key={product?.Id}>  
                    <div className="article-img">
                        <img src={product.Files?.lenght ? product?.Files[0]?.Uri : getImg(product)} alt={product.Name} />
                    </div>           
                    <div className="article-details">
                        <h2 key={product.Keywords}>{product?.Name}</h2>
                        <div className="details-section">
                            <p>{product.MainCategory?.Name}</p>  
                            <div className="badge-cntr">{getZones(product)}</div>
                        </div>
                        <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                        
                    </div>
                </article>      */}

                <ProductArticles product={product}/>
                    

            </section>
        </>
    );
}
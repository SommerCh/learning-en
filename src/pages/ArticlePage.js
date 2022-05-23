import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import ProductArticles from "../components/ProductArticles";
import PlaceholderImg from "../assets/placeholder-img.png";

export default function ArticlePage() {
    const [product, setProduct] = useState({});
    const params = useParams();
    const url = `http://localhost:3000/products/?id=${params.productId}`;


    useEffect(() => {
        async function getProduct() {
            const response = await fetch(url);
            const responseData = await response.json();
            setProduct(responseData.data);
            console.log(responseData.data)
        }
        getProduct();
    }, [url]);


    return (
        <>
            <section className="page">
                <h1 className="page-title">Article Page</h1>
                
                <article className="article-page" key={product.Id}>  
                    <div className="article-img">
                        <img src={PlaceholderImg} alt="" />
                    </div>           
                    <div className="article-details">
                        <h2>Product {product.Name}</h2>
                        <div className="details-section">
                            <p>Main Category {product.MainCategory}</p>  
                        </div>
                        <p className="description">
                            Product description <br/>
                            
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate, 
                            justo ut consequat pretium, turpis massa hendrerit dui, et cursus dolor enim eu mi. 
                            Curabitur in dolor leo. Cras vel urna eros. Nulla velit risus, porta at auctor sit amet, 
                            sodales ut ligula.
                        </p>
                        <div>
                            <div>
                                <span>H: 100cm</span>
                                <span>B: 100cm </span>
                                <span>L: 500cm </span>
                            </div>
                            <div>
                                <span>Lorem ipsum dolor sit amet.</span>
                                <span>Lorem ipsum dolor sit amet. </span>
                                <span>Lorem ipsum dolor sit amet. </span>
                            </div>
                        </div>
                        
                    </div>
                </article>     

                {/* <ProductArticles product={product?.Id}/> */}
                    

            </section>
        </>
    );
}
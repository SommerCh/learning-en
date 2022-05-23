import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
                
                <article className="article-page" key={product?.Id}>  
                    <div className="article-img">
                        <img src={PlaceholderImg} alt="" />
                    </div>           
                    <div className="article-details">
                        <h2>Product Name{product.Name}</h2>
                        <h4>Main Category {product.MainCategory}</h4>  

                        <div className="details-section">
                            <div className="details-text"> 
                                <h4>Product description</h4>
                                <p>{product.Descriptions?.Text}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Nulla auctor turpis ac lectus venenatis, non malesuada lectus accumsan. <br/>
                                Vivamus sed mi massa. Aliquam in fringilla sem, non feugiat turpis. 
                                Nullam convallis varius erat id ornare. 
                                Aenean dapibus enim eu ligula luctus finibus.
                                </p>
                            </div>

                            <div className="details-box">
                                <div className="details-inner-content">
                                    <h4>Dimentioner</h4>
                                    <span>H: {product.Dimentions?.Height} 000cm</span>
                                    <span>B: {product.Dimentions?.Width} 000cm</span>
                                    <span>L: {product.Dimentions?.Depth} 000cm</span>
                                </div>
                                <div className="details-inner-content">
                                    <h4>Zoner</h4>
                                    <span>Lorem ipsum</span>
                                    <span>Lorem ipsum</span>
                                    <span>Lorem ipsum</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </article>                       

            </section>
        </>
    );
}
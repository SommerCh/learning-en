import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../components/Splide/splide.css';
import PlaceholderImg from '../assets/placeholder-img.png';
import { BiArrowBack } from 'react-icons/bi'


export default function ArticlePage() {
    const [product, setProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();
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

    function handleClickBack() {
        navigate(`/products`);
    }


    return (
        <>
            <section className="page">
                <h1 className="page-title"> <button onClick={handleClickBack} className="back-btn"><BiArrowBack/> </button> Læringsmøbler </h1>                
                <article className="article-page" key={product?.Id}>  
                    <div className="thumbnail-slides">
                        <Splide aria-label="article gallery">
                            <SplideSlide>
                                <div className='splide-img-cntr'>
                                <img src={product.Files?.Uri} data-splide-lazy={PlaceholderImg} alt=""/>  
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='splide-img-cntr'>
                                <img src={product.Files?.Uri} data-splide-lazy={PlaceholderImg} alt=""/>  
                                </div>
                            </SplideSlide>
                            <SplideSlide>
                                <div className='splide-img-cntr'>
                                    <img src={product.Files?.Uri} data-splide-lazy={PlaceholderImg} alt=""/>                    
                                </div>
                            </SplideSlide>
                        </Splide>
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
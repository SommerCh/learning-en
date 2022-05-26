import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../components/Splide/splide.css';
// import PlaceholderImg from '../assets/placeholder-img.png';
import { BiArrowBack } from 'react-icons/bi'


export default function ArticlePage() {
    const navigate = useNavigate();
    const params = useParams();
    const productId = parseInt(params.id);
    const [product, setProduct] = useState({});

    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/products.json");
            const data = await response.json();
            
            const productData = data.find(item => item.Id === productId);
            setProduct(productData);
            console.log(productData); 
        }
        if (productId) {
            getData();
        }
    }, [productId])



    return (
        <>
            <section className="page">
                <h1 className="page-title"> 
                <button onClick={() => navigate(`/products`)} className="back-btn"><BiArrowBack/> </button> 
                Læringsmøbler </h1>                
                <article className="article-page" key={product?.Id}>  
                    <div className="thumbnail-slides">
                        <Splide aria-label="article gallery">
                            {product.Files?.map(img => (
                                <SplideSlide>
                                    <div className='splide-img-cntr'>
                                    <img key={img.Id} alt={img.Name} src={img.Uri}/>
                                    </div>
                                </SplideSlide>
                            ))}
                        </Splide>
                    </div>           
                    <div className="article-details">
                        <h1>{product?.Name}</h1>
                        <h4>{product.MainCategory?.Name}</h4>  

                        <div className="details-section">
                            <div className="details-text-cntr">
                                <div className="details-text"> 
                                    <h3 className="details-section-title">Beskrivelse</h3>
                                    {/* <p key={product.Descriptions[0].DescriptionTypeID} dangerouslySetInnerHTML={{ __html: product.Descriptions[0].Text }}></p> */}
                                    <p>{product.Descriptions?.lenght ? product.Descriptios[0]?.Text : product?.Name} </p>

                                </div>
                                <div className="details-zones-cntr">
                                    <h3 className="details-section-title">Zoner</h3>
                                    {product.Zones?.map(zone => (
                                        <div className="details-zones">
                                            <img key={zone.Id} alt={zone.Name} src={zone.ImgUrl}/>
                                            <span key={zone.Id} dangerouslySetInnerHTML={{ __html: zone.Name }}></span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="details-inner-content">
                                <h3 className="details-section-title">Dimentioner</h3>
                                <div className="details-dimentions-cntr">
                                    {product.Dimentions?.map(dimention => (
                                        <div className="details-dimentions">
                                            <div className="dimentions-section"> <span>Del:</span> <span key={dimention.Name} dangerouslySetInnerHTML={{ __html: dimention.Part }}></span></div>
                                            <div className="dimentions-section"> <span>Højde:</span> <span key={dimention.Name} dangerouslySetInnerHTML={{ __html: dimention.Height }}></span></div>
                                            <div className="dimentions-section"> <span>Bredde:</span> <span key={dimention.Name} dangerouslySetInnerHTML={{ __html: dimention.Width }}></span></div>
                                            <div className="dimentions-section"> <span>Dybte:</span> <span key={dimention.Name} dangerouslySetInnerHTML={{ __html: dimention.Depth }}></span></div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </article>                       

            </section>
        </>
    );
}
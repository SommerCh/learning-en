import { useState, useEffect } from "react";
import Tooltip from "./ToolTip";
import TrappeImg from "../assets/product-imgs/tieredseating-0.webp";
import AkustikImg from "../assets/product-imgs/acousticpanel-0.webp";
import OpbevaringImg from "../assets/product-imgs/storagetrolleyiii-1.webp";
import BordeImg from "../assets/product-imgs/worktable-1.webp";
import StoleImg from "../assets/product-imgs/slotfill-0.webp";
import DiverseImg from "../assets/product-imgs/organicpodiumii-0.webp";
import RumImg from "../assets/product-imgs/zonemaster-0.webp";
import KlassesætImg from "../assets/product-imgs/mansard-0.webp";
import FeedbackzoneImg from "../assets/product-imgs/hightable-3.webp";
import StillezoneImg from "../assets/product-imgs/roomy-0.webp";
import GruppezoneImg from "../assets/product-imgs/ideatank-0.webp";
import AllezoneImg from "../assets/product-imgs/magnifier-0.webp";
import ProductArticles from "./ProductArticles";
import Læringstrapper from "./Læringstrapper";
import Akustik from "./Akustik";
import Opbevaring from "./Opbevaring";
import Borde from "./Borde";


export default function Categories() {
    const [activeTab, setActiveTab] = useState("all");
    const [products, setProducts] = useState([]);
    // const [searchValue, setSearchValue] = useState("");
    // const [categories, setCategories] = useState([]);

    // // Fetch categories
    // useEffect(() => {
    //     async function getData() {
    //         const response = await fetch("/data/categories.json");
    //         const data = await response.json();
    //         setCategories(data);
    //         // console.log(data);
    //     }
    //     getData();
    // }, [])

    // // Fetch category imgs
    // function getCatImg(category) {
    //     if (category.Files?.length >= 1) {
    //         return category.Files[0]?.Uri;
    //     } 
    // }

        // Fetch products
        useEffect(() => {
            async function getData() {
                const response = await fetch("/data/products.json");
                const data = await response.json();
                setProducts(data);
                // console.log(data);
            }
            getData();
        }, [])
    
        // Fetch product imgs
        function getImg(product) {
            if (product.Files?.length >= 1) {
                return product.Files[0]?.Uri;
            } 
        }


            // Fetch product zones + add tooltips
    function getZones(product) {
        if (product.Zones?.length === 1) {
            return (
                <Tooltip text={product.Zones[0]?.Name}>
                    <img src={product.Zones[0]?.ImgUrl} alt={product.Zones[0]?.Name} dataTooltip={product.Zones[0]?.Name}/>
                </Tooltip>
                );
        } if (product.Zones?.length === 2) {
            return (
                <>
                <Tooltip text={product.Zones[0]?.Name}>
                    <img src={product.Zones[0]?.ImgUrl} alt={product.Zones[0]?.Name} dataTooltip={product.Zones[0]?.Name}/>
                </Tooltip>
                <Tooltip text={product.Zones[1]?.Name}>
                    <img src={product.Zones[1]?.ImgUrl} alt={product.Zones[1]?.Name} dataTooltip={product.Zones[1]?.Name}/>
                </Tooltip>
                </>
            );
        } if (product.Zones?.length === 3) {
            return (
                <>
                <Tooltip text={product.Zones[0]?.Name}>
                    <img src={product.Zones[0]?.ImgUrl} alt={product.Zones[0]?.Name} dataTooltip={product.Zones[0]?.Name}/>
                </Tooltip>
                <Tooltip text={product.Zones[1]?.Name}>
                    <img src={product.Zones[1]?.ImgUrl} alt={product.Zones[1]?.Name} dataTooltip={product.Zones[1]?.Name}/>
                </Tooltip>
                <Tooltip text={product.Zones[2]?.Name}>
                    <img src={product.Zones[2]?.ImgUrl} alt={product.Zones[2]?.Name} dataTooltip={product.Zones[2]?.Name}/>
                </Tooltip>
                </>
            );
        } if (product.Zones?.length === 4) {
            return (
                <>
                <Tooltip text={product.Zones[0]?.Name}>
                    <img src={product.Zones[0]?.ImgUrl} alt={product.Zones[0]?.Name} dataTooltip={product.Zones[0]?.Name}/>
                </Tooltip>
                <Tooltip text={product.Zones[1]?.Name}>
                    <img src={product.Zones[1]?.ImgUrl} alt={product.Zones[1]?.Name} dataTooltip={product.Zones[1]?.Name}/>
                </Tooltip>
                <Tooltip text={product.Zones[2]?.Name}>
                    <img src={product.Zones[2]?.ImgUrl} alt={product.Zones[2]?.Name} dataTooltip={product.Zones[2]?.Name}/>
                </Tooltip>
                <Tooltip text={product.Zones[3]?.Name}>
                    <img src={product.Zones[3]?.ImgUrl} alt={product.Zones[3]?.Name} dataTooltip={product.Zones[3]?.Name}/>
                </Tooltip>
                </>
            );
        }
    }


    return (
        <>  
            <section className="category-cntr">

                <article className="category-article">  
                        <div className="category-img"> 
                            <img src={TrappeImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("all")} className={activeTab === 'all' ? 'active' : ''}> 
                                    <span>Alle produkter</span>
                                </button>
                            </div> 
                        </div>                  
                </article>   

                <article className="category-article">  
                        <div className="category-img"> 
                            <img src={TrappeImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("læringstrapper")} className={activeTab === 'læringstrapper' ? 'active' : ''}>
                                    <span>Læringstrapper</span>
                                </button>
                            </div> 
                        </div>                  
                </article>
        
                <article className="category-article">  
                    <div className="category-img">
                        <img src={AkustikImg} alt=""/>
                        <div className="category-title"> 
                            <button onClick={() => setActiveTab("akustik")} className={activeTab === 'akustik' ? 'active' : ''}>
                                <span>Akustik</span>
                            </button> 
                        </div> 
                    </div>  
                </article>
       
                <article className="category-article">  
                    <div className="category-img">
                        <img src={OpbevaringImg} alt=""/>
                        <div className="category-title"> 
                            <button onClick={() => setActiveTab("opbevaring")} className={activeTab === 'opbevaring' ? 'active' : ''}>
                                <span>Opbevaring</span>
                            </button>
                        </div>  
                    </div>  
                </article>
       
                <article className="category-article">  
                        <div className="category-img">
                            <img src={BordeImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("borde")} className={activeTab === 'borde' ? 'active' : ''}>
                                    <span>Borde</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article">  
                        <div className="category-img">
                            <img src={StoleImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("stole")} className={activeTab === 'stole' ? 'active' : ''}>
                                    <span>Stole</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article">  
                        <div className="category-img">
                            <img src={DiverseImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("diverse")} className={activeTab === 'diverse' ? 'active' : ''}>
                                    <span>Diverse</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article"> 
                        <div className="category-img">
                            <img src={RumImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("rumirummet")} className={activeTab === 'rumirummet' ? 'active' : ''}>
                                    <span>Rum i rummet</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article">  
                        <div className="category-img">
                            <img src={KlassesætImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("klassesæt")} className={activeTab === 'klassesæt' ? 'active' : ''}>
                                    <span>Klassesæt</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article">  
                        <div className="category-img">
                            <img src={FeedbackzoneImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("feedbackzone")} className={activeTab === 'feedbackzone' ? 'active' : ''}>
                                    <span>Feedbackzone</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article">  
                        <div className="category-img">
                            <img src={StillezoneImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("stillezone")} className={activeTab === 'stillezone' ? 'active' : ''}>
                                    <span>Stillezone</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article">  
                        <div className="category-img">
                            <img src={GruppezoneImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("gruppezone")} className={activeTab === 'gruppezone' ? 'active' : ''}>
                                    <span>Gruppezone</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article">  
                        <div className="category-img">
                            <img src={AllezoneImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("allezone")} className={activeTab === 'allezone' ? 'active' : ''}>
                                    <span>Allezone</span>
                                </button>
                            </div>  
                        </div>  
                </article>

            </section>
            

            {/* Content to display in active tabs */}
                {/* All */}
                {activeTab === 'all' && (
                    <>
                        <ProductArticles/>
                    </> 
                )}

                {/* Læringstrapper */}
                    {activeTab === 'læringstrapper' && (
                        <>
                            <h3>Læringstrapper</h3>
                            <Læringstrapper/>
                            {/* <section className="article-cntr"> 
                                {products.filter((product) => product.MainCategory.Id === 2).map((product) => ( 
                                    <article className="article-box" key={product?.Id}>  
                                        <div className="article-img">
                                            <img src={getImg(product)} alt={product.Name} />
                                        </div>           
                                        <div className="article-details">
                                            <h2 key={product.Keywords}>{product?.Name}</h2>
                                            <div className="details-section">
                                                <p>{product.MainCategory?.Name}</p>  
                                                <div className="badge-cntr">{getZones(product)}</div>
                                            </div>
                                            <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                                        </div>
                                    </article>
                                ))} 
                            </section> */}
                        </> 
                    )}

                {/* Akustik */}
                    {activeTab === 'akustik' && (
                        <>
                            <h3>Akustik</h3>
                           <Akustik/>
                           {/* <section className="article-cntr"> 
                                {products.filter((product) => product.MainCategory.Id === 3).map((product) => ( 
                                    <article className="article-box" key={product?.Id}>  
                                        <div className="article-img">
                                            <img src={getImg(product)} alt={product.Name} />
                                        </div>           
                                        <div className="article-details">
                                            <h2 key={product.Keywords}>{product?.Name}</h2>
                                            <div className="details-section">
                                                <p>{product.MainCategory?.Name}</p>  
                                                <div className="badge-cntr">{getZones(product)}</div>
                                            </div>
                                            <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                                        </div>
                                    </article>
                                ))} 
                            </section> */}
                        </> 
                    )}

                {/* Opbevaring */}
                    {activeTab === 'opbevaring' && (
                        <>
                            <h3>Opbevaring</h3>
                            <Opbevaring />
                            {/* <section className="article-cntr"> 
                                {products.filter((product) => product.MainCategory.Id === 8).map((product) => ( 
                                    <article className="article-box" key={product?.Id}>  
                                        <div className="article-img">
                                            <img src={getImg(product)} alt={product.Name} />
                                        </div>           
                                        <div className="article-details">
                                            <h2 key={product.Keywords}>{product?.Name}</h2>
                                            <div className="details-section">
                                                <p>{product.MainCategory?.Name}</p>  
                                                <div className="badge-cntr">{getZones(product)}</div>
                                            </div>
                                            <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                                        </div>
                                    </article>
                                ))} 
                            </section> */}
                        </> 
                    )} 

                {/* Borde */}
                    {activeTab === 'borde' && (
                        <>
                            <h3>Borde</h3>
                           <Borde />
                           {/* <section className="article-cntr"> 
                                {products.filter((product) => product.MainCategory.Id === 5).map((product) => ( 
                                    <article className="article-box" key={product?.Id}>  
                                        <div className="article-img">
                                            <img src={getImg(product)} alt={product.Name} />
                                        </div>           
                                        <div className="article-details">
                                            <h2 key={product.Keywords}>{product?.Name}</h2>
                                            <div className="details-section">
                                                <p>{product.MainCategory?.Name}</p>  
                                                <div className="badge-cntr">{getZones(product)}</div>
                                            </div>
                                            <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                                        </div>
                                    </article>
                                ))} 
                            </section> */}
                        </> 
                    )}

                {/* Stole */}
                    {activeTab === 'stole' && (
                        <>
                            <h3>Stole</h3>
                            <section className="article-cntr"> 
                                {products.filter((product) => product.MainCategory.Id === 6).map((product) => ( 
                                    <article className="article-box" key={product?.Id}>  
                                        <div className="article-img">
                                            <img src={getImg(product)} alt={product.Name} />
                                        </div>           
                                        <div className="article-details">
                                            <h2 key={product.Keywords}>{product?.Name}</h2>
                                            <div className="details-section">
                                                <p>{product.MainCategory?.Name}</p>  
                                                <div className="badge-cntr">{getZones(product)}</div>
                                            </div>
                                            <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                                        </div>
                                    </article>
                                ))} 
                            </section>
                        </> 
                    )}

                {/* Diverse */}
                    {activeTab === 'diverse' && (
                        <>
                            <h3>Diverse</h3>
                            <section className="article-cntr"> 
                                {products.filter((product) => product.MainCategory.Id === 7).map((product) => ( 
                                    <article className="article-box" key={product?.Id}>  
                                        <div className="article-img">
                                            <img src={getImg(product)} alt={product.Name} />
                                        </div>           
                                        <div className="article-details">
                                            <h2 key={product.Keywords}>{product?.Name}</h2>
                                            <div className="details-section">
                                                <p>{product.MainCategory?.Name}</p>  
                                                <div className="badge-cntr">{getZones(product)}</div>
                                            </div>
                                            <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                                        </div>
                                    </article>
                                ))} 
                            </section>
                        </> 
                    )}

                {/* Rum i rummet */}
                    {activeTab === 'rumirummet' && (
                        <>
                            <h3>Rum i rummet</h3>
                            <section className="article-cntr"> 
                                {products.filter((product) => product.MainCategory.Id === 8).map((product) => ( 
                                    <article className="article-box" key={product?.Id}>  
                                        <div className="article-img">
                                            <img src={getImg(product)} alt={product.Name} />
                                        </div>           
                                        <div className="article-details">
                                            <h2 key={product.Keywords}>{product?.Name}</h2>
                                            <div className="details-section">
                                                <p>{product.MainCategory?.Name}</p>  
                                                <div className="badge-cntr">{getZones(product)}</div>
                                            </div>
                                            <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                                        </div>
                                    </article>
                                ))} 
                            </section>
                        </> 
                    )}

                {/* Klassesæt */}
                    {activeTab === 'klassesæt' && (
                        <>
                            <h3>Klassesæt</h3>
                            <section className="article-cntr"> 
                                {products.filter((product) => product.MainCategory.Id === 9).map((product) => ( 
                                    <article className="article-box" key={product?.Id}>  
                                        <div className="article-img">
                                            <img src={getImg(product)} alt={product.Name} />
                                        </div>           
                                        <div className="article-details">
                                            <h2 key={product.Keywords}>{product?.Name}</h2>
                                            <div className="details-section">
                                                <p>{product.MainCategory?.Name}</p>  
                                                <div className="badge-cntr">{getZones(product)}</div>
                                            </div>
                                            <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                                        </div>
                                    </article>
                                ))} 
                            </section>
                        </> 
                    )}

                {/* Feedbackzone */}
                    {activeTab === 'feedbackzone' && (
                        <>
                            <h3>Feedbackzone</h3>
                            <section className="article-cntr"> 
                                {products.filter((product) => product.MainCategory.Id === 10).map((product) => ( 
                                    <article className="article-box" key={product?.Id}>  
                                        <div className="article-img">
                                            <img src={getImg(product)} alt={product.Name} />
                                        </div>           
                                        <div className="article-details">
                                            <h2 key={product.Keywords}>{product?.Name}</h2>
                                            <div className="details-section">
                                                <p>{product.MainCategory?.Name}</p>  
                                                <div className="badge-cntr">{getZones(product)}</div>
                                            </div>
                                            <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                                        </div>
                                    </article>
                                ))} 
                            </section>
                        </> 
                    )}

                {/* Stillezone */}
                    {activeTab === 'stillezone' && (
                        <>
                            <h3>Stillezone</h3>
                            <section className="article-cntr"> 
                                {products.filter((product) => product.MainCategory.Id === 11).map((product) => ( 
                                    <article className="article-box" key={product?.Id}>  
                                        <div className="article-img">
                                            <img src={getImg(product)} alt={product.Name} />
                                        </div>           
                                        <div className="article-details">
                                            <h2 key={product.Keywords}>{product?.Name}</h2>
                                            <div className="details-section">
                                                <p>{product.MainCategory?.Name}</p>  
                                                <div className="badge-cntr">{getZones(product)}</div>
                                            </div>
                                            <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                                        </div>
                                    </article>
                                ))} 
                            </section>
                        </> 
                    )}

                {/* Gruppezone */}
                    {activeTab === 'gruppezone' && (
                        <>
                            <h3>Gruppezone</h3>
                            <section className="article-cntr"> 
                                {products.filter((product) => product.MainCategory.Id === 12).map((product) => ( 
                                    <article className="article-box" key={product?.Id}>  
                                        <div className="article-img">
                                            <img src={getImg(product)} alt={product.Name} />
                                        </div>           
                                        <div className="article-details">
                                            <h2 key={product.Keywords}>{product?.Name}</h2>
                                            <div className="details-section">
                                                <p>{product.MainCategory?.Name}</p>  
                                                <div className="badge-cntr">{getZones(product)}</div>
                                            </div>
                                            <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                                        </div>
                                    </article>
                                ))} 
                            </section>
                        </> 
                    )}

                {/* Allezone */}
                    {activeTab === 'allezone' && (
                        <>
                            <h3>Allezone</h3>
                            <section className="article-cntr"> 
                                {products.filter((product) => product.MainCategory.Id === 13).map((product) => ( 
                                    <article className="article-box" key={product?.Id}>  
                                        <div className="article-img">
                                            <img src={getImg(product)} alt={product.Name} />
                                        </div>           
                                        <div className="article-details">
                                            <h2 key={product.Keywords}>{product?.Name}</h2>
                                            <div className="details-section">
                                                <p>{product.MainCategory?.Name}</p>  
                                                <div className="badge-cntr">{getZones(product)}</div>
                                            </div>
                                            <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                                        </div>
                                    </article>
                                ))} 
                            </section>
                        </> 
                    )}


        </>
    );

    
}
import { useState, useEffect } from "react";
import Tooltip from "./ToolTip";
import {  useNavigate } from "react-router-dom";

export default function ProductArticles({product}) {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();


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

    function handleClick() {
        navigate(`/article/&{product.Id}`);
    }


    return (
        <>  
            {/* Filter and searchbar */}
            <section className="filter-cntr">
                <input className="search" type="text" 
                    // onKeyUp="search(this.value)" 
                    placeholder="Søg..." 
                    onChange={(e) => setSearchValue(e.target.value.toLowerCase())} 
                />
                
                <select className="filter" >
                    <option value="all">Filter</option>
                    <option value="this">this</option>
                    <option value="that">that</option>
                    <option value="other">other</option>
                </select>
            </section>
            

             {/* Searched products displayed */}
             <section className="article-cntr"> 
                {products.filter((product) => product.Name.toLowerCase().includes(searchValue)).map((product) => ( 
                    <article className="article-box" key={product?.Id} onClick={handleClick} >  
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
    );    
}
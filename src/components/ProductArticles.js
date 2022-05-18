import { useState, useEffect } from "react";

export default function ProductArticles() {
    const [products, setProducts] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    // Fetch products
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/products.json");
            const data = await response.json();
            setProducts(data);
            console.log(data);
        }
        getData();
    }, [])

    // Fetch procudt imgs
    function getImg(product) {
        if (product.Files?.length >= 1) {
            return product.Files[0]?.Uri;
        } 
    }

    return (
        <>  
            {/* Filter and searchbar */}
            <section className="filter-cntr">
                <input className="search" type="text" 
                    onChange={(e) => setSearchValue(e.target.value.toLowerCase())} 
                    onkeyup="search(this.value)" placeholder="Søg..." 
                />
                
                <select className="filter" value="" onChange="">
                    <option value="all">Filter</option>
                    <option value="this">this</option>
                    <option value="that">that</option>
                    <option value="other">other</option>
                </select>
            </section>

            {/* Searched products displayed */}
            <section className="article-cntr"> 
                {products.filter((product) => product.Name.toLowerCase().includes(searchValue)).map((product) => ( 
                    <article className="article-box" key={product?.Id}>  
                        <div className="article-img">
                            <img src={product.Files?.lenght ? product?.Files[0]?.Uri : getImg(product)} alt={product.Name} />
                        </div>           
                        <div className="article-details">
                            <h2 key={product.Keywords}>{product?.Name}</h2>
                            <p>{product.MainCategory?.Name}</p>  
                            <p className="description line-clamp">{product.Descriptions[0]?.Text}</p>
                        </div>
                    </article>
                ))} 
            </section>
        </>
    );    
}
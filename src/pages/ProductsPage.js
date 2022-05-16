import { useState, useEffect } from "react";

export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    // Fetch categories
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/categories.json");
            const data = await response.json();
            setCategories(data);
            console.log(data);
        }
        getData();
    }, [])

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

    // Fetch imgs
    function getImg(element) {
        if (element.Files?.length >= 1) {
            return element.Files[0]?.Uri;
        } 
    }




    return (
        <>  
            <section className="page">
                <h1 className="page-title">Produkter</h1>

                {/* Categories mapped and displayed */}
                <section className="category-cntr">          
                    {categories.map(element => ( 
                        <article className="category-article">  
                            <div className="category-img">
                                <img src={element.Files?.lenght ? element?.Files[0]?.Uri : getImg(element)} alt={element.Name} />
                                <div className="article-title"> <h3>{element?.Name}</h3></div>  
                            </div>  
                        </article>
                    ))}
                </section>

                {/* Filter and searchbar */}
                <section className="filter-cntr">
                    <input className="search" type="text" onChange={(e) => setSearchValue(e.target.value.toLowerCase())} onkeyup="search(this.value)" placeholder="Søg..." />
                    
                    <select className="filter" value="" onChange="">
                        <option value="all">Filter</option>
                        <option value="this">this</option>
                        <option value="that">that</option>
                        <option value="other">other</option>
                    </select>
                </section>

                {/* Searched products displayed */}
                <section className="article-cntr"> 
                    {products.filter((element) => element.Name.toLowerCase().includes(searchValue)).map((element) => ( 
                        <article className="article-box">  
                            <div className="article-img">
                                <img src={element.Files?.lenght ? element?.Files[0]?.Uri : getImg(element)} alt={element.Name} />
                            </div>           
                            <div className="article-details">
                                <h2>{element?.Name}</h2>
                                <p>{element.MainCategory?.Name}</p>  
                                <p className="description line-clamp">{element.Descriptions[0]?.Text}</p>
                            </div>
                        </article>
                    ))} 
                </section>



            </section>
        </>
    );
}

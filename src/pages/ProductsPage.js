import { useState, useEffect } from "react";
// import { BiSearch } from "react-icons/bi";

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


    // Fetch products by main category
    // Læringstrapper
    function isTrapper(products) {
        return products.MainCategory.Id === 2;
    }
    console.log(products.find(isTrapper));

    // Akustik
    function isAkustik(products) {
        return products.MainCategory.Id === 3;
    }
    console.log(products.find(isAkustik));

    // Opbevaring
    function isOpbevaring(products) {
        return products.MainCategory.Id === 4;
    }
    console.log(products.find(isOpbevaring));

    // Borde
    function isBorde(products) {
        return products.MainCategory.Id === 5;
    }
    console.log(products.find(isBorde));

    // Stole
    function isStole(products) {
        return products.MainCategory.Id === 6;
    }
    console.log(products.find(isStole));

    // Diverse
    function isDiverse(products) {
        return products.MainCategory.Id === 7;
    }
    console.log(products.find(isDiverse));

    // Rum i rummet
    function isRum(products) {
        return products.MainCategory.Id === 8;
    }
    console.log(products.find(isRum));



    return (
        <>  
            <section className="page">
                <h1 className="page-title">Produkter</h1>

                {/* Categories mapped and displayed */}
                <section className="category-cntr">          
                    {categories.map(category => ( 
                        <article className="category-article">  
                            <div className="category-img" onClick="">
                                <div className="article-title"> <span>{category?.Name}</span></div>  
                                <img src={category.Files?.lenght ? category?.Files[0]?.Uri : getImg(category)} alt={category.Name} />
                            </div>  
                        </article>
                    ))}
                </section>

                {/* Filter and searchbar */}
                <section className="filter-cntr">
                    {/* <BiSearch/> */}
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
                        <article className="article-box">  
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



            </section>
        </>
    );
}

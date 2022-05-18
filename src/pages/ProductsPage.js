import { useState, useEffect } from "react";
import ProductArticles from "../components/ProductArticles";

export default function ProductsPage() {
    const [categories, setCategories] = useState([]);

    // Fetch categories
    useEffect(() => {
        async function getData() {
            const response = await fetch("/data/categories.json");
            const data = await response.json();
            setCategories(data);
            // console.log(data);
        }
        getData();
    }, [])

    // Fetch category imgs
    function getCatImg(category) {
        if (category.Files?.length >= 1) {
            return category.Files[0]?.Uri;
        } 
    }

    

    return (
        <>  
            <section className="page">
                <h1 className="page-title">Produkter</h1>

                {/* Categories mapped and displayed */}
                <section className="category-cntr">          
                    {categories.map(category => ( 
                        <article className="category-article" key={category.Id}>  
                            <div className="category-img" >
                                <div className="article-title"> <span>{category?.Name}</span></div>  
                                <img src={getCatImg(category)} alt={category.Name} />
                            </div>  
                        </article>
                    ))}
                </section>
                
                {/* Products and search function  */}
                <ProductArticles/> 

            </section>
        </>
    );
}

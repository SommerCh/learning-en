import { useState } from "react";
import ProductArticles from "../components/ProductArticles";
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
import Læringstrapper from "../components/Læringstrapper";
import Akustik from "../components/Akustik";
import Opbevaring from "../components/Opbevaring";
import Borde from "../components/Borde";
import Stole from "../components/Stole";
import Diverse from "../components/Diverse";
import RumIRummet from "../components/RumIRummet";
import Klassesæt from "../components/Klassesæt";
import Feedbackzone from "../components/Feedbackzone";
import Stillezone from "../components/Stillezone";
import Gruppezone from "../components/Gruppezone";
import Allezone from "../components/Allezone";

export default function ProductsPage() {
    const [activeTab, setActiveTab] = useState("all");
     

    return (
        <>  
            <section className="page">
                <h1 className="page-title">Produkter</h1>

                {/* Category tabs*/}
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
                            <h2>Læringstrapper</h2>
                            <Læringstrapper/>
                        </> 
                    )}

                {/* Akustik */}
                    {activeTab === 'akustik' && (
                        <>
                            <h2>Akustik</h2>
                           <Akustik/>
                        </> 
                    )}

                {/* Opbevaring */}
                    {activeTab === 'opbevaring' && (
                        <>
                            <h2>Opbevaring</h2>
                            <Opbevaring />
                        </> 
                    )} 

                {/* Borde */}
                    {activeTab === 'borde' && (
                        <>
                            <h2>Borde</h2>
                           <Borde />
                        </> 
                    )}

                {/* Stole */}
                    {activeTab === 'stole' && (
                        <>
                            <h2>Stole</h2>
                            <Stole />
                        </> 
                    )}

                {/* Diverse */}
                    {activeTab === 'diverse' && (
                        <>
                            <h2>Diverse</h2>
                            <Diverse />
                        </> 
                    )}

                {/* Rum i rummet */}
                    {activeTab === 'rumirummet' && (
                        <>
                            <h2>Rum i rummet</h2>
                            <RumIRummet/>
                        </> 
                    )}

                {/* Klassesæt */}
                    {activeTab === 'klassesæt' && (
                        <>
                            <h2>Klassesæt</h2>
                            <Klassesæt/>
                        </> 
                    )}

                {/* Feedbackzone */}
                    {activeTab === 'feedbackzone' && (
                        <>
                            <h2>Feedbackzone</h2>
                            <Feedbackzone/>
                        </> 
                    )}

                {/* Stillezone */}
                    {activeTab === 'stillezone' && (
                        <>
                            <h2>Stillezone</h2>
                            <Stillezone/>
                        </> 
                    )}

                {/* Gruppezone */}
                    {activeTab === 'gruppezone' && (
                        <>
                            <h2>Gruppezone</h2>
                            <Gruppezone/>
                        </> 
                    )}

                {/* Allezone */}
                    {activeTab === 'allezone' && (
                        <>
                            <h2>Allezone</h2>
                           <Allezone/>
                        </> 
                    )}

            </section>
        </>
    );
}

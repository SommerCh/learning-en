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
                <h1 className="page-title">Læringsmøbler</h1>

                {/* Category tabs*/}
                {/* The active tab will render the component with th related products */}
                <section className="category-cntr">

                <article className="category-article anim-tabs">  
                        <div className="category-img"> 
                            <img src={TrappeImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("all")} className={activeTab === 'all' ? 'active' : ''}> 
                                    <span className="anim-tabs-title">Alle læringsmøbler</span>
                                </button>
                            </div> 
                        </div>                  
                </article>   

                <article className="category-article anim-tabs">  
                        <div className="category-img"> 
                            <img src={TrappeImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("læringstrapper")} className={activeTab === 'læringstrapper' ? 'active' : ''}>
                                    <span className="anim-tabs-title">Læringstrapper</span>
                                </button>
                            </div> 
                        </div>                  
                </article>
        
                <article className="category-article anim-tabs">  
                    <div className="category-img">
                        <img src={AkustikImg} alt=""/>
                        <div className="category-title"> 
                            <button onClick={() => setActiveTab("akustik")} className={activeTab === 'akustik' ? 'active' : ''}>
                                <span className="anim-tabs-title">Akustik</span>
                            </button> 
                        </div> 
                    </div>  
                </article>
       
                <article className="category-article anim-tabs">  
                    <div className="category-img">
                        <img src={OpbevaringImg} alt=""/>
                        <div className="category-title"> 
                            <button onClick={() => setActiveTab("opbevaring")} className={activeTab === 'opbevaring' ? 'active' : ''}>
                                <span className="anim-tabs-title">Opbevaring</span>
                            </button>
                        </div>  
                    </div>  
                </article>
       
                <article className="category-article anim-tabs">  
                        <div className="category-img">
                            <img src={BordeImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("borde")} className={activeTab === 'borde' ? 'active' : ''}>
                                    <span className="anim-tabs-title">Borde</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article anim-tabs">  
                        <div className="category-img">
                            <img src={StoleImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("stole")} className={activeTab === 'stole' ? 'active' : ''}>
                                    <span className="anim-tabs-title">Stole</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article anim-tabs">  
                        <div className="category-img">
                            <img src={DiverseImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("diverse")} className={activeTab === 'diverse' ? 'active' : ''}>
                                    <span className="anim-tabs-title">Diverse</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article anim-tabs"> 
                        <div className="category-img">
                            <img src={RumImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("rumirummet")} className={activeTab === 'rumirummet' ? 'active' : ''}>
                                    <span className="anim-tabs-title">Rum i rummet</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article anim-tabs">  
                        <div className="category-img">
                            <img src={KlassesætImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("klassesæt")} className={activeTab === 'klassesæt' ? 'active' : ''}>
                                    <span className="anim-tabs-title">Klassesæt</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article anim-tabs">  
                        <div className="category-img">
                            <img src={FeedbackzoneImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("feedbackzone")} className={activeTab === 'feedbackzone' ? 'active' : ''}>
                                    <span className="anim-tabs-title">Feedbackzone</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article anim-tabs">  
                        <div className="category-img">
                            <img src={StillezoneImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("stillezone")} className={activeTab === 'stillezone' ? 'active' : ''}>
                                    <span className="anim-tabs-title">Stillezone</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article anim-tabs">  
                        <div className="category-img">
                            <img src={GruppezoneImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("gruppezone")} className={activeTab === 'gruppezone' ? 'active' : ''}>
                                    <span className="anim-tabs-title">Gruppezone</span>
                                </button>
                            </div>  
                        </div>  
                </article>

                <article className="category-article anim-tabs">  
                        <div className="category-img">
                            <img src={AllezoneImg} alt=""/>
                            <div className="category-title"> 
                                <button onClick={() => setActiveTab("allezone")} className={activeTab === 'allezone' ? 'active' : ''}>
                                    <span className="anim-tabs-title">Allezone</span>
                                </button>
                            </div>  
                        </div>  
                </article>

            </section>
            

            {/* Content to display in active tabs */}
                {/* All */}
                {activeTab === 'all' && ( <ProductArticles/> )}

                {/* Læringstrapper */}
                    {activeTab === 'læringstrapper' && ( <Læringstrapper/> )}

                {/* Akustik */}
                    {activeTab === 'akustik' && ( <Akustik/> )}

                {/* Opbevaring */}
                    {activeTab === 'opbevaring' && ( <Opbevaring /> )} 

                {/* Borde */}
                    {activeTab === 'borde' && ( <Borde />  )}

                {/* Stole */}
                    {activeTab === 'stole' && ( <Stole /> )}

                {/* Diverse */}
                    {activeTab === 'diverse' && ( <Diverse /> )}

                {/* Rum i rummet */}
                    {activeTab === 'rumirummet' && ( <RumIRummet/> )}

                {/* Klassesæt */}
                    {activeTab === 'klassesæt' && ( <Klassesæt/> )}

                {/* Feedbackzone */}
                    {activeTab === 'feedbackzone' && ( <Feedbackzone/> )}

                {/* Stillezone */}
                    {activeTab === 'stillezone' && ( <Stillezone/> )}

                {/* Gruppezone */}
                    {activeTab === 'gruppezone' && ( <Gruppezone/>  )}

                {/* Allezone */}
                    {activeTab === 'allezone' && ( <Allezone/> )}

            </section>
        </>
    );
}

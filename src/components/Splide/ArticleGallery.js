import { Splide, SplideSlide } from '@splidejs/react-splide';
import './splide.css';

export default function ArticleGallery() {


    
    return (
        <>

            <Splide aria-label="article gallery">

                <SplideSlide>
                    <div className='splide-img-cntr'>
                        <img src="https://picsum.photos/500/350" data-splide-lazy="https://picsum.photos/500/350" alt=""/>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className='splide-img-cntr'>
                        <img src="https://picsum.photos/400/300" data-splide-lazy="https://picsum.photos/400/300" alt=""/>
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className='splide-img-cntr'>
                        <img src="https://picsum.photos/400/350" data-splide-lazy="https://picsum.photos/400/350" alt=""/>                    
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className='splide-img-cntr'>
                        <img src="https://picsum.photos/300/300" data-splide-lazy="https://picsum.photos/300/300" alt=""/>                    
                    </div>
                </SplideSlide>

                <SplideSlide>
                    <div className='splide-img-cntr'>
                        <img src="https://picsum.photos/500/400" data-splide-lazy="https://picsum.photos/500/400" alt=""/>                    
                    </div>
                </SplideSlide>

            </Splide>

        </>

    )
}

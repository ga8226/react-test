import{Swiper,SwiperSlide} from'swiper/react';
import { Autoplay,Pagination,Navigation } from "swiper";
import'swiper/css';
const Portfolio = () =>{
    return(
        <div>
             <header id="hd" className="fixed-top">
                <div className="d-flex justify-content-between align-items-center container">
                    <h1><a href="">로고</a></h1>
                    <ul id="gnb" className="d-flex">
                        <li className='px-2'><a href="#about">내소개</a></li>
                        <li className='px-2'><a href="#review">내작업</a></li>
                        <li className='px-2'><a href="#contact">연락처들</a></li>
                    </ul>
                    <ul id="sns" className="d-flex">
                        <li className='px-3'><a href="">깃</a></li>
                        <li className='px-3'><a href="">노션</a></li>
                    </ul>
                </div>

             </header>
             <div id="slider" className="vh-100">
             <Swiper

            spaceBetween={0}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
             >
              <SwiperSlide><div className="vh-100 bg-dark">1</div></SwiperSlide>
              <SwiperSlide><div className="vh-100 bg-warning">2</div></SwiperSlide>
              <SwiperSlide><div className="vh-100 bg-info">3</div></SwiperSlide>
              <SwiperSlide><div className="vh-100 bg-dark">4</div></SwiperSlide>
             </Swiper>
             </div>
             <div id="about"  className="vh-100 bg-light"></div>
             <div id="review" className="vh-100">
                <div className="container">
                    <div className='row'>
                        <div className='col-4'>1</div>
                        <div  className='col-4'>2</div>
                        <div  className='col-4'>3</div>
                    </div>
                  
                </div>
             </div>
             <div id="contact"  className="vh-100 bg-light"></div>
        </div>
    )
        
}
export default Portfolio;
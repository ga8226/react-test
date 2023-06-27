import{Swiper,SwiperSlide} from'swiper/react';
import { Autoplay,Pagination,Navigation } from "swiper";
import'swiper/css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Portfolio = () =>{
    return(
        <div>
             <header id="hd" className="fixed-top">
                <div className="d-flex justify-content-between align-items-center container">
                    <h1><a href=""><img src="./img/logo.svg" alt="" /></a></h1>
                    <ul id="gnb" className="d-flex">
                        <li className='px-2'><a href="#about">내소개</a></li>
                        <li className='px-2'><a href="#review">내작업</a></li>
                        <li className='px-2'><a href="#contact">연락처들</a></li>
                    </ul>
                    <ul id="sns" className="d-flex">
                        <li className='px-3'><a href="https://github.com/ga8226"><i class="bi bi-github"></i></a></li>
                        <li className='px-3'><a href="https://www.notion.so/5-1-css-font-de1802128a6b42568fdbc59f809b7923?pvs=12"><i class="bi bi-envelope-paper-heart"></i></a></li>
                    </ul>
                </div>

             </header>
             <div id="slider" className="vh-100">
             <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
             >
            <SwiperSlide><div className="vh-100 bg-1"style={{backgroundImage :"url(img/img1.jpg)"}}></div></SwiperSlide>
            <SwiperSlide><div className="vh-100 bg-2"style={{backgroundImage :"url(img/img2.jpg)"}}></div></SwiperSlide>
            <SwiperSlide><div className="vh-100 bg-3"style={{backgroundImage:"url(img/img3.jpg)"}}></div></SwiperSlide>
            <SwiperSlide><div className="vh-100 bg-dark">4</div></SwiperSlide>
            </Swiper>
    
             </div>
             <div id="about"  className="vh-100 bg-light">
                <div className='row' id='abp'>
                    <div className='col-6'>1</div>
                    <div className='col-6'>2</div>
                    <div className='col-6'>3</div>
                    <div className='col-6'>4</div>
                </div>
             </div>
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
             <div>
                <footer id='ft'>
                    <div className='container text-center'>
                      <p><i class="bi bi-phone-vibrate">010-1998-0212</i></p>
                    </div>
                </footer>
             </div>
        </div>
    
    )
        
}
export default Portfolio;
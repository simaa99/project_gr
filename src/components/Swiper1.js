import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
    EffectCoverflow,
    Pagination,
    Navigation
} from "swiper/core";
import Img1 from "../img/3.PNG";
import Img2 from "../img/4.PNG";

import Img3 from "../img/5.PNG";

import Img4 from "../img/6.PNG";
import Img5 from "../img/7.PNG";




SwiperCore.use([EffectCoverflow, Pagination, Navigation]);


export default function Swiper1() {
    return (
        <>

            <Swiper
                navigation={true}
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={50}
                loop={true}
                autoPlay={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: true
                }}

                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={Img1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Img5} />
                </SwiperSlide>

            </Swiper>
        </>
    );
}

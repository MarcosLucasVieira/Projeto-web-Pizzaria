import { ReactNode } from "react";
import { Swiper, SwiperProps } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider.css';
import autoprefixer from "autoprefixer";

interface SliderProps {
    settings: SwiperProps;
    children: ReactNode;
}

export function Slider({ settings, children }: SliderProps) {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={10} // ou o valor desejado para o espaçamento
                breakpoints={{
                    // Quando a largura da tela for maior que 640px (telas médias), slidesPerView será 2
                    640: {
                        slidesPerView: 2,
                    },
                    // Para telas maiores, você pode aumentar ainda mais o número de slides visíveis
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                {...settings}
            >
                {children}
            </Swiper>
        </>
    );
}

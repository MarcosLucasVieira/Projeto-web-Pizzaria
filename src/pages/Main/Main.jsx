import { SwiperSlide } from "swiper/react";
import Page from "../../components";
import { Slider } from '../../components/Slider/Slider'; 

export function Main() {
    const settings = {
        spaceBetween: -20,
        pagination: {
            clickable: true,
        }
    }; 

    return (
        <>
        
        <div className="relative w-full min-h-screen bg-cover bg-center">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60 z-[-1]"
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                }}
            ></div>
            <Page.Header />
            <Page.Sidebar />
            <Page.Footer />
            <Slider settings={settings} >
                <SwiperSlide >
                    <div className="
                   bg-white w-64 h-96 rounded-lg sm:w-1/2 md:w-5/6 md:h-80 jutify-center items-center

                     ">
                        <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emElMjBjYWxhYnJlc2F8ZW58MHx8MHx8fDA%3D" 
                         className="
                        rounded-tl-lg
                        rounded-tr-lg
                        w-full 
                        h-1/2
                        object-cover"

                       />
                       <h1 className="text-center font-bold underline text-lg text-red-800
                       ">Calabresa Suprema + Refrigerante</h1>
                       <p className="text-center text-lighter text-sm p-1 lg:p-4">Uma deliciosa pizza de calabrasa feita em fogão de lenha e uma refrigerante de 2 litros a sua escolha</p>
                       <button className="p-1 w-full text-center text-lg font-bold text-red-800 ">
                        A Partir de 49,99R$
                        </button>

                    </div>
                </SwiperSlide>

                <SwiperSlide >
                <div className="
                   bg-white w-64 h-96 rounded-lg sm:w-1/2 md:w-5/6 md:h-80 jutify-center items-center text-red-800

                     ">
                        <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emElMjBjYWxhYnJlc2F8ZW58MHx8MHx8fDA%3D" 
                         className="
                        rounded-tl-lg
                        rounded-tr-lg
                        w-full 
                        h-1/2
                        object-cover"

                       />
                       <h1 className="text-center font-bold underline text-lg
                       ">Calabresa Suprema + Refrigerante</h1>
                       <p className="text-center text-lighter text-sm p-1 lg:p-4">Uma deliciosa pizza de calabrasa feita em fogão de lenha e uma refrigerante de 2 litros a sua escolha</p>
                       <button className="p-1 w-full text-center text-lg font-bold text-red-800 ">
                        A Partir de 49,99R$
                        </button>

                    </div>
                </SwiperSlide>

                <SwiperSlide >
                <div className="
                   bg-white w-64 h-96 rounded-lg sm:w-1/2 md:w-5/6 md:h-80 jutify-center items-center text-red-800

                     ">
                        <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emElMjBjYWxhYnJlc2F8ZW58MHx8MHx8fDA%3D" 
                         className="
                        rounded-tl-lg
                        rounded-tr-lg
                        w-full 
                        h-1/2
                        object-cover"

                       />
                       <h1 className="text-center font-bold underline text-lg
                       ">Calabresa Suprema + Refrigerante</h1>
                       <p className="text-center text-lighter text-sm p-1 lg:p-4">Uma deliciosa pizza de calabrasa feita em fogão de lenha e uma refrigerante de 2 litros a sua escolha</p>
                       <button className="p-1 w-full text-center text-lg font-bold text-red-800 ">
                        A Partir de 49,99R$
                        </button>

                    </div>
                </SwiperSlide>

                <SwiperSlide >
                <div className="
                   bg-white w-64 h-96 rounded-lg sm:w-1/2 md:w-5/6 md:h-80 jutify-center items-center text-red-800

                     ">
                        <img src="https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emElMjBjYWxhYnJlc2F8ZW58MHx8MHx8fDA%3D" 
                         className="
                        rounded-tl-lg
                        rounded-tr-lg
                        w-full 
                        h-1/2
                        object-cover"

                       />
                       <h1 className="text-center font-bold underline text-lg
                       ">Calabresa Suprema + Refrigerante</h1>
                       <p className="text-center text-lighter text-sm p-1 lg:p-4">Uma deliciosa pizza de calabrasa feita em fogão de lenha e uma refrigerante de 2 litros a sua escolha</p>
                       <button className="p-1 w-full text-center text-lg font-bold text-red-800 ">
                        A Partir de 49,99R$
                        </button>

                    </div>
                </SwiperSlide>
            </Slider>
            
            <div className="flex flex-col gap-6">
                    <h1 className="text-red-800 font-bold underline text-center mt-6">
                        Conheça Nossa História
                    </h1>
                    
                    <div className="flex justify-center gap-2">
                        <div
                        className="
                            w-3/4
                            lg:w-4/5
                            shadow-lg shadow-black
                            rounded-lg
                            p-4
                            flex
                            flex-col
                            lg:flex-row
                            gap-x-6"
                        >
                        <img 
                            src="https://images.unsplash.com/photo-1716237389072-354bcb7ab6d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphcmlhfGVufDB8fDB8fHww"
                            className="
                            w-full
                            lg:w-1/2
                            h-32
                            lg:h-auto
                            rounded-lg
                            object-cover object-bottom"
                        />
                        <p className="lg:w-1/2">
                            Há mais de uma década, a Pedaço do Céu nasceu do 
                            sonho de uma família apaixonada por pizza e boas histórias. 
                            Começou pequena, mas com muito amor e dedicação, transformou-se
                            em um refúgio aconchegante para amigos e famílias se reunirem. Cada
                            detalhe do espaço foi pensado para criar um ambiente acolhedor, onde
                            todos se sentem em casa. Aqui, o sabor das pizzas artesanais se mistura
                            com a alegria dos encontros. Pedaço do Céu: mais que uma pizzaria, um lar
                            de momentos felizes!
                        </p>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div
                        className="
                            w-3/4
                            lg:w-4/5
                            shadow-lg shadow-black
                            rounded-lg
                            p-4
                            flex
                            flex-col
                            lg:flex-row-reverse
                            gap-x-6"
                        >
                        <img 
                            src="https://images.unsplash.com/photo-1716237389072-354bcb7ab6d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphcmlhfGVufDB8fDB8fHww"
                            className="
                            w-full
                            lg:w-1/2
                            h-32
                            lg:h-auto
                            rounded-lg
                            object-cover object-bottom"
                        />
                        <p className="lg:w-1/2">
                            Há mais de uma década, a Pedaço do Céu nasceu do 
                            sonho de uma família apaixonada por pizza e boas histórias. 
                            Começou pequena, mas com muito amor e dedicação, transformou-se
                            em um refúgio aconchegante para amigos e famílias se reunirem. Cada
                            detalhe do espaço foi pensado para criar um ambiente acolhedor, onde
                            todos se sentem em casa. Aqui, o sabor das pizzas artesanais se mistura
                            com a alegria dos encontros. Pedaço do Céu: mais que uma pizzaria, um lar
                            de momentos felizes!
                        </p>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div
                        className="
                            w-3/4
                            lg:w-4/5
                            shadow-lg shadow-black
                            rounded-lg
                            p-4
                            flex
                            flex-col
                            lg:flex-row
                            gap-x-6
                            mb-12"
                        >
                        <img 
                            src="https://images.unsplash.com/photo-1716237389072-354bcb7ab6d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphcmlhfGVufDB8fDB8fHww"
                            className="
                            w-full
                            lg:w-1/2
                            h-32
                            lg:h-auto
                            rounded-lg
                            object-cover object-bottom"
                        />
                        <p className="lg:w-1/2">
                            Há mais de uma década, a Pedaço do Céu nasceu do 
                            sonho de uma família apaixonada por pizza e boas histórias. 
                            Começou pequena, mas com muito amor e dedicação, transformou-se
                            em um refúgio aconchegante para amigos e famílias se reunirem. Cada
                            detalhe do espaço foi pensado para criar um ambiente acolhedor, onde
                            todos se sentem em casa. Aqui, o sabor das pizzas artesanais se mistura
                            com a alegria dos encontros. Pedaço do Céu: mais que uma pizzaria, um lar
                            de momentos felizes!
                        </p>
                        </div>
                    </div>
                    </div>

            </div>
            



        </>
    );
}

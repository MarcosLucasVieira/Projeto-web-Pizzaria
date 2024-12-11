import { SwiperSlide } from "swiper/react";
import Page from "../../components";
import { Slider } from '../../components/Slider/Slider'; 
import React, { useState, useEffect } from 'react';

export function Main() {
    const settings = {
        spaceBetween: -10,
        pagination: {
            clickable: true,
        }
    }; 
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    
    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };
   
        window.addEventListener('resize', handleResize);
   
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const sections = [
        {
          title: "Conheça Nossa História",
          imgSrc: "https://images.unsplash.com/photo-1716237389072-354bcb7ab6d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBpenphcmlhfGVufDB8fDB8fHww",
          text: "Há mais de uma década, a Pedaço do Céu nasceu do sonho de uma família apaixonada por pizza e boas histórias. Começou pequena, mas com muito amor e dedicação, transformou-se em um refúgio aconchegante para amigos e famílias se reunirem. Cada detalhe do espaço foi pensado para criar um ambiente acolhedor, onde todos se sentem em casa. Aqui, o sabor das pizzas artesanais se mistura com a alegria dos encontros. Pedaço do Céu: mais que uma pizzaria, um lar de momentos felizes!",
          reverseOrder: false,
        },
        {
          title: "Nosso Compromisso com a Tradição",
          imgSrc: "https://images.unsplash.com/photo-1597339349587-b07760c07520?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBpenphc3xlbnwwfHwwfHx8MA%3D%3D",
          text: "A Pedaço do Céu começou com mestres pizzaiolos que trouxeram tradição e paixão pela verdadeira pizza italiana. Cada pizza é cuidadosamente preparada à mão, com ingredientes selecionados e assada em forno a lenha, garantindo um sabor inigualável. O aroma irresistível e a textura crocante conquistam a cada mordida. Mais do que uma pizza, é uma experiência celestial de sabor! Venha provar e descubra por que cada pedaço é realmente um pedaço do céu.",
          reverseOrder: isSmallScreen ? false : true, // Em telas pequenas, reverseOrder será false
        },
        {
          title: "Tradição e Sabor no Rio de Janeiro",
          imgSrc: "https://images.unsplash.com/photo-1726843268433-63a9ba1b1176?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphcmlhfGVufDB8fDB8fHww",
          text: "A Pedaço do Céu nasceu no coração da Zona Sul do Rio de Janeiro, trazendo o verdadeiro sabor da tradição italiana. Desde sua inauguração, tornou-se ponto de encontro de famílias e amigos, conquistando corações com suas pizzas artesanais feitas no forno a lenha. Mesmo após tantos anos, permanece no mesmo local, mantendo viva sua essência e qualidade incomparável. Hoje, é um símbolo de tradição e sabor, reconhecido e amado por toda a região. Venha fazer parte dessa história deliciosa!",
          reverseOrder: false,
        }
      ];

    return (
        <>
        
        <div className="relative w-full min-h-screen bg-cover bg-center ">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40 z-[-1]"
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                }}
            ></div>
            <Page.Header />
            <Page.Sidebar />
            <Slider  settings={settings} >
                <SwiperSlide >
                    <div className="
                   bg-white w-64 h-96 rounded-lg sm:w-1/2 md:w-5/6 md:h-80 jutify-center items-center  hover:overflow-y-scroll overflow-hidden  

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
                       <p className="text-center text-lighter text-sm lg:p-4 ">
                       Desfrute do sabor irresistível da nossa pizza Calabresa Suprema,
                        com ingredientes selecionados e uma explosão de sabor, acompanhada
                         de um refrigerante geladinho para completar a experiência. O combo
                          perfeito para matar a fome e compartilhar bons momentos! ❤️
                        
                          <button className="p-1 w-full text-center text-lg font-bold text-red-800 ">
                        A Partir de 49,99R$
                        </button>
                        </p>
                      

                    </div>
                </SwiperSlide>

                <SwiperSlide >
                <div className="
                   bg-white w-64 h-96 rounded-lg sm:w-1/2 md:w-5/6 md:h-80 jutify-center items-center  hover:overflow-y-scroll overflow-hidden  

                     ">
                        <img src="https://images.unsplash.com/photo-1706954225234-fe9808ce3d72?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                         className="
                        rounded-tl-lg
                        rounded-tr-lg
                        w-full 
                        h-1/2
                        object-cover"

                       />
                       <h1 className="text-center font-bold underline text-lg
                       ">Combo Familia duas Pizzas Gigantes</h1>
                       <p className="text-center text-lighter text-sm p-1 lg:p-2">
                       Aproveite momentos deliciosos com quem você ama!
                        O Combo Família traz duas pizzas grandes nos sabores
                         que você escolher, perfeitas para compartilhar e deixar
                          todos felizes. Ideais para encontros em casa, comemorações
                           ou aquele jantar especial em família! ❤️</p>
                       <button className="p-1 w-full text-center text-lg font-bold text-red-800 ">
                        A Partir de 49,99R$
                        </button>

                    </div>
                </SwiperSlide>

                <SwiperSlide >
                <div className="
                   bg-white w-64 h-96 rounded-lg sm:w-1/2 md:w-5/6 md:h-80 jutify-center items-center  hover:overflow-y-scroll overflow-hidden

                     ">
                        <img src="
                        https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHBpenphc3xlbnwwfHwwfHx8MA%3D%3D" 
                         className="
                        rounded-tl-lg
                        rounded-tr-lg
                        w-full 
                        h-1/2
                        object-cover"

                       />
                       <h1 className="text-center font-bold underline text-lg
                       ">Uma Pizza Gigante + 1 Pizza Doce</h1>
                       <p className="text-center text-lighter text-sm p-1 lg:p-4">
                       O combo perfeito para agradar todos os gostos!
                        Desfrute de uma pizza gigante com o sabor de sua
                         escolha e finalize a experiência com uma irresistível
                          pizza doce. Uma combinação deliciosa para momentos especiais! ❤️</p>
                       <button  className="p-1 w-full text-center text-lg font-bold text-red-800 ">
                        A Partir de 79,99R$
                        </button>

                    </div>
                </SwiperSlide>

                <SwiperSlide >
                <div className="
                   bg-white w-64 h-96 rounded-lg sm:w-1/2 md:w-5/6 md:h-80 jutify-center items-center  overflow-hidden

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
            
            <div className="flex flex-col gap-6 items-center">
                <h1 className="text-red-800 font-bold underline text-center mt-6">Conheça Nossa História</h1>

                {sections.map((section, index) => (
                    <div key={index} className="flex  justify-center gap-2 w-3/4 lg:w-4/5 shadow-lg shadow-black rounded-lg p-4 xs: flex-col lg:flex-row ">
                    {section.reverseOrder ? (
                       <>
                       <div className="flex items-center justify-center lg:h-1/2">
                         <p className="text-center font-light sm:text-sm lg:text-lg">{section.text}</p>
                       </div>
                       <img
                         src={section.imgSrc}
                         className="w-full lg:w-1/2 h-32 lg:h-auto rounded-lg object-cover object-bottom lg:h-62 "
                       />
                     </>
                    ) : (
                        <>
                        <img src={section.imgSrc} className="w-full lg:w-1/2 h-32 lg:h-auto rounded-lg object-cover object-bottom lg:h-52" />
                        <p className="lg:w-1/2 text-center font-lighter sm:text-sm lg:text-lg">{section.text}</p>
                        </>
                    )}
                    </div>
                ))}
                </div>

            </div>
            



        </>
    );
}

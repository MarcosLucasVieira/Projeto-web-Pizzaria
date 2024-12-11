import { useState } from "react";
import { ArrowDown, MapPin, Phone } from "phosphor-react";
import Page from "../../components";

export function Restaurante() {
  const [visibleHorarioIndex, setVisibleHorarioIndex] = useState(null); // Estado para controlar qual seção exibe horários

  const sections = [
    {
      title: "Botafogo, RJ",
      imgSrc:
        "https://images.unsplash.com/photo-1726843268433-63a9ba1b1176?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphcmlhfGVufDB8fDB8fHww",
      end: "Rua das Palmeiras, nº 123, Botafogo, Rio de Janeiro, RJ, CEP 22280-000",
      tel: "(21) 1234-5678 ",
      horario: "Segunda a Sexta: 10h às 22h",
    },

    {
        title: "Copacabana, RJ",
        imgSrc:
          "https://images.unsplash.com/photo-1626990140776-407c6c0a1605?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphcmlhc3xlbnwwfHwwfHx8MA%3D%3D",
        end: "Avenida Atlântica, nº 456, Copacabana, Rio de Janeiro, RJ, CEP 22070-000",
        tel: "(21) 9876-5432",
        horario: "Todos os dias: 11h às 23h",
      },

      {
        title: "Ipanema, RJ",
        imgSrc:
            "https://images.unsplash.com/photo-1611100552804-27502ccc9e3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBpenphcmlhc3xlbnwwfHwwfHx8MA%3D%3D",
        end: "Rua Visconde de Pirajá, nº 789, Ipanema, Rio de Janeiro, RJ, CEP 22410-000",
        tel: "(21) 3333-4444",
        horario: "Sábados e Domingos: 12h às 20h",
      },
  ];

  return (
    <>
      <div className="relative w-full min-h-screen bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 z-[-1]"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        ></div>

        <Page.Header />
        <Page.Sidebar />
        <div className="flex flex-col items-center justify-center p-2 gap-6 ">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`bg-white w-4/5 rounded-lg shadow-lg border border-red-800 xs:overflow-y-scroll mt-8 lg:w-1/2 transition-all duration-100 ${
                visibleHorarioIndex === index ? "h-96" : "h-80"
              }`}
            >
              {/* Imagem */}
              <img
                src={section.imgSrc}
                alt={section.title}
                className="w-full h-1/2 object-cover object-bottom rounded-t-lg"
              />

              {/* Título */}
              <p className="text-center underline font-bold text-red-800 text-md mt-1">
                {section.title}
              </p>

              {/* Divisor */}
              <hr className="border bg-transparent mt-1" />

              {/* Ícone */}
              <div className="flex justify-center mt-1">
                <MapPin className="w-5 h-5 text-red-800" />
              </div>

              {/* Endereço */}
              <p className="text-xs text-red-800 text-center font-light lg:text-sm">
                {section.end}
              </p>

              {/* Telefone */}
              <div className="gap-1 justify-center items-center flex">
                <Phone className="h-5 w-5 text-red-800 underline" />
                <p className="underline text-red-800 font-bold text-sm lg:text:md mt-1">
                  {section.tel}
                </p>
              </div>

              {/* Botão e Horários */}
              <div className="flex flex-col items-center mt-2">
                <button
                  onClick={() =>
                    setVisibleHorarioIndex(
                      visibleHorarioIndex === index ? null : index
                    )
                  }
                  className="text-red-800 px-4 py-2 hover:text-red-700 underline flex items-center gap-1"
                >
                  Horários <ArrowDown
                    className={`transform transition-transform duration-500 ${
                      visibleHorarioIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {visibleHorarioIndex === index && (
                  <p className="mt-2 text-center text-sm text-red-800">
                    {section.horario}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

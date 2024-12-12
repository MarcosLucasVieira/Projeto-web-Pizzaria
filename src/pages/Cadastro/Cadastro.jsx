import { GoogleLogo,FacebookLogo, LinkedinLogo } from "phosphor-react";
import Page from "../../components";
import { Link } from "react-router-dom";

export function Cadastro (){
    return(
        <>

        <Page.Header />
            <Page.Sidebar />

            <div className="items-center flex justify-center z-10">
                <div className="flex flex-row items-center justify-center w-full h-screen ">
                    {/* Div "Entrar" */}
                    <div className="flex flex-col items-center w-full gap-4">
                        <p className="font-bold text-red-800 text-3xl font-opens">Cadastro</p>
                        <div className="flex items-center justify-center gap-2">
                            <GoogleLogo className="w-6 h-6" />
                            <FacebookLogo className="w-6 h-6" />
                            <LinkedinLogo className="w-6 h-6" />
                        </div>
                        <input className="border-2 border-red-800 rounded-lg text-center text-md w-60"
                            type="text"
                            name="username"
                            placeholder="Digite o seu Nome Completo"
                        />
                         <input
                            className="border-2 border-red-800 rounded-lg text-center text-md w-60"
                            type="text"
                            name="username"
                            placeholder="Digite o seu Email"
                        />
                         <input
                            className="border-2 border-red-800 rounded-lg text-center text-md w-60"
                            type="text"
                            name="username"
                            placeholder="Digite o sua Telefone"
                        />
                        <input
                            className="border-2 border-red-800 rounded-lg text-center text-md w-60"
                            type="password"
                            name="password"
                            placeholder="Digite a sua senha"
                        />
                        <button className="bg-red-800 rounded-lg w-1/2 lg:w-40 text-white font-bold">
                            Enviar
                        </button>
                        <button className="bg-white w-1/2 mt-1 p-1 font-bold text-red-800 underline text-centerrounded-lg"
                                > <Link to="/login">Faça seu login</Link>
                                    
                        </button>
                        </div>
                        </div>
                        </div>
        </>
    )
}
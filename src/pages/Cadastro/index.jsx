import { FacebookLogo, GoogleLogo,  LinkedinLogo } from "phosphor-react";
import { useState } from "react";
import Page from "../../components";
import { Link } from "react-router-dom";

export function Login() {
    const [isAnimating, setIsAnimating] = useState(false);
    const [isCadastro, setIsCadastro] = useState(false);  // Estado para controlar o conteúdo

    const handleCadastroClick = () => {
        setIsAnimating(true);
        setIsCadastro(true);  // Exibe o conteúdo de "Cadastro"
    };

    const handleLoginClick = () => {
        setIsAnimating(false);  // Volta a animação
        setIsCadastro(false);  // Exibe o conteúdo de "Login"
    };

    return (
        <>
            <Page.Header />
            <Page.Sidebar />

            <div className="items-center flex justify-center z-10">
                <div className="flex flex-row items-center justify-center w-full h-screen lg:h-auto  lg:w-1/2 h-96 border-red-800 border rounded shadow-lg  lg:relative ">
                    {/* Div "Entrar" */}
                    <div className="flex flex-col items-center w-full gap-4">
                        <p className="font-bold text-red-800 text-3xl font-opens">Entrar</p>
                        <div className="flex items-center justify-center gap-2">
                            <GoogleLogo className="w-6 h-6" />
                            <FacebookLogo className="w-6 h-6" />
                            <LinkedinLogo className="w-6 h-6" />
                        </div>
                        <input
                            className="border-2 border-red-800 rounded-lg text-center"
                            type="text"
                            name="username"
                            placeholder="Digite o seu login"
                        />
                        <input
                            className="border-2 border-red-800 rounded-lg text-center"
                            type="password"
                            name="password"
                            placeholder="Digite a sua senha"
                        />
                        <button className="bg-red-800 rounded-lg w-1/2 lg:w-40 text-white font-bold">
                            Enviar
                        </button>
                        <button className="bg-white w-1/2 mt-1 p-1 font-bold text-red-800 underline text-centerrounded-lg"
                                > <Link to="/cadastro">Cadastro</Link>
                                    
                        </button>
                        <button className="text-sm underline">Esqueceu sua senha?</button>
                    </div>

                    {/* Div "Cadastro" com animação de slide para a esquerda */}
                    <div
                        className={`hidden lg:flex w-11/12 h-96 ml-auto items-center justify-center flex-col transition-all duration-500 ease-in-out ${
                            isAnimating
                                ? "rounded-l-lg transform translate-x-[-110%] w-3/4 bg-gradient-to-r from-red-800 to-red-400"
                                : "bg-red-800"
                        } z-30 relative`}
                    >
                        {isCadastro ? (
                            // Exibe conteúdo alternativo quando isCadastro for true
                            <>
                                <h1 className="font-opens text-white font-bold text-2xl">Faça seu Login</h1>
                                <p className="font-lighter font-opens text-sm text-white text-center underline">
                                    Se você já tem um cadastro, clique aqui
                                </p>
                                <button
                                    onClick={handleLoginClick}  // Volta para o conteúdo de "Login"
                                    className="bg-white w-1/2 mt-1 p-1 font-bold text-red-800 underline rounded-lg"
                                >
                                    Login
                                </button>
                            </>
                        ) : (
                            // Exibe o conteúdo inicial de "Cadastro"
                            <>
                                <h1 className="font-opens text-white font-bold text-2xl">Olá, Cliente</h1>
                                <p className="font-lighter font-opens text-sm text-white text-center">
                                    Faça seu cadastro clicando aqui
                                </p>
                                <button
                                    onClick={handleCadastroClick}  // Exibe o conteúdo de "Cadastro"
                                    className="bg-white w-1/2 mt-1 p-1 font-bold text-red-800 underline rounded-lg"
                                >
                                    Cadastro
                                </button>
                            </>
                        )}
                    </div>

                    {/* Div "Olá" atrás da "Cadastro" */}
                    <div className=" absolute  pl-20 justify-center items-center ">
                    <div className="absolute justify-center  flex-col w-52 h-full z-10 hidden gap-4 lg:flex">
                   
                   <p className="font-bold text-red-800 text-3xl font-opens text-center">Cadastro</p>
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
                        <button className="bg-red-800 rounded-lg w-1/2 lg:w-60 text-white font-bold">
                            Enviar
                        </button>
                        
                        
                        
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}

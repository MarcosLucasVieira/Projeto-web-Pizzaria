import {  Bag, UserCircle } from 'phosphor-react';
import { Link } from "react-router-dom";
import Button from './Button'
export function Sidebar() {
    const buttons = ["Início","Restaurante", "Reservas", "Rodízio", "Delivery",];
    
    return (

        <div className="hidden lg:flex flex-row justify-center items-center gap-4  lg:w-full bg-red-800 mb-6 p-8   ">
        {buttons.map((label, index) => (
                <Button key={index} label={label} />
            ))}
             <button>
                <Link to="/login">                
                <UserCircle className="h-6 w-6 text-white" />
                </Link>
            </button>
            <button>
                <Link to="/carrinho">                
                <Bag className="h-6 w-6 text-white" />
                </Link>
            </button>

        </div>
    );
};

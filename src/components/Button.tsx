// Componente de Botão Reutilizável
function Button({ label }: { label: string }) {
    return (
        
        <button className="
            bg-white 
            hover:bg-red-700 hover:text-white
            rounded-lg 
            hidden sm:block 
            w-36 h-8 
            flex items-center 
            justify-center
            text-center
            text-md 
            font-bold
            text-red-700
        ">
            {label}
        </button>
    );
}
export default Button;


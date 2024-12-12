import { useNavigate } from 'react-router-dom';

function Button({ label }: { label: string }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (label === "Restaurante") {
            navigate('/restaurante'); 
        } if ( label === "Reservas") {
            navigate('/reservas');
        }if ( label === "Início") {
            navigate('/');
        } if (label === "Rodízio"){
            navigate('/rodizio')
    } if (label === "Delivery"){
        navigate('/delivery')
    }
    };

    return (
        <button
            onClick={handleClick}
            className="
                
                hover:border-2 border-gray-200 hover:text-gray-200 
                hidden sm:block 
                w-36 h-8 
                flex items-center 
                justify-center
                text-center
                text-md 
                font-bold
                text-white
            "
        >
            {label}
        </button>
    );
}

export default Button;

import Button from './Button'
export function Sidebar() {
    const buttons = ["Início","Restaurante", "Contatos", "Reservas", "Rodízio", "Delivery",];
    
    return (

        <div className="hidden lg:flex flex-row justify-center items-center gap-4  lg:w-full bg-red-800 mb-6 p-8">
        {buttons.map((label, index) => (
                <Button key={index} label={label} />
            ))}
        </div>
    );
};

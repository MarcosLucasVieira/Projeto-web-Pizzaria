import Button from './Button'
export function Sidebar() {
    const buttons = ["Restaurante", "Contatos", "Reservas", "Rodízio", "Delivery"];
    
    return (
        <div className="p-8 flex flex-row justify-center items-center gap-4">
            {buttons.map((label, index) => (
                <Button key={index} label={label} />
            ))}
        </div>
    );
}
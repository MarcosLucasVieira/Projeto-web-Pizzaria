import Page from "../../components";

export function Reservas (){
    return (
        <>
         <div className="relative w-full min-h-screen bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 z-[-1]"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
          }}
        ></div>
            <Page.Header />
            <Page.Sidebar />
        </div>
        </>
    )
}
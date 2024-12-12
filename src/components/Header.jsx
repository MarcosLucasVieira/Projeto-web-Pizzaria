import { ArrowUUpLeft, Bag, BookBookmark, Gift, HouseLine, List, Pizza, Star, User, UserCircle } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  return (
    <>
      <div className="w-full bg-red-800 h-8 md:h-9 fixed top-0 flex items-center justify-between xs:block sm:block md:hidden p-2 z-10">
        <button onClick={toggleSidebar}>
          <List className="text-white items-start" />
        </button>
        <h1 className="text-white xs:text-xs sm:text-sm underline">Pedacinho do céu</h1>
        <div className="flex gap-2">
          <button className="text-white lg:hideen" >
           <Link to='/login' > <User /> </Link>
          </button>


         <button className="text-white" href="http://">
           <Link to='/carrinho' > <Bag /> </Link>
          </button>
        </div>
      </div>

      {/*SideBar*/}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-red-800 shadow-md transition-transform transform duration-300 z-20 ${
          
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className=" flex justify-bewtwenn items-center p-6"> 
         
        <UserCircle className=" 
          text-white
          xs: w-6  h-6 mr-4
          sm: w-11 h-11 mr-4 
          " />
          
          <p className="
          xs: text-xs
          sm:text-lg
          text-white
          font-bold flex
          items-center
          underline
          "> 
          
           Bem-vindo Usuário</p>
        <button
          className="absolute -4 right-4 text-white"
          onClick={toggleSidebar}
        >
          <ArrowUUpLeft className="
          xs:m-2 w-4 h-4"/>
        </button>
        </div>

        <ul className="
        xs:text-xs
        sm:text-sm
        p-6
        m-0
        text-white
        font-bolder 
        ">
          <button className="mb-4 flex items-center gap-2">
        <HouseLine className="xs:h-6 w-6 sm:h-6 w-6" />
        <Link to="/">Início</Link>
      </button>

          <button className="mb-4 flex items-center gap-2">
        <Star className="xs:h-6 w-6 sm:h-6 w-6" />
        <Link to="/restaurante">Restaurantes</Link>
      </button>
      <button className="mb-4 flex items-center gap-2">
        <BookBookmark className="xs:h-6 w-6 sm:h-6 w-6" />
        <Link to="/reservas">Reservas</Link>
      </button>
      <button className="mb-4 flex items-center gap-2">
        <Pizza className="xs:h-6 w-6 sm:h-6 w-6" />
        <Link to="/rodizio">Rodízio</Link>
      </button>
      <button className="mb-4 flex items-center gap-2">
        <Gift className="xs:h-6 w-6 sm:h-6 w-6" />
        <Link to="/delivery">Delivery</Link>
      </button>
       
        </ul>


      <div>
        <hr className="jutify-end border-gray-300 my-4"/>
      </div>

      <p className="font-lighter text-xs text-gray-300  text-center justify-end">V 0.0.1 Alpha</p>


      
      </div>
    </>
  );
}

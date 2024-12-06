import { Bag, List, User } from "phosphor-react";

export function Header() {
    return (
        <div className="w-full bg-red-800 h-8 md:h-9 fixed top-0 flex items-center justify-between xs:block sm:block md:hidden p-2">
            <List className="text-white items-start"/>
            <h1 className=" text-white xs:text-xs sm: text-sm underline ">Pedacinho do céu</h1>
            <div className=" flex gap-2">
            
            <a className=" text-white"  href="http://"><User/></a>
            <a  className=" text-white" href="http://"><Bag/></a></div>
            
            
      </div>
    );
  }
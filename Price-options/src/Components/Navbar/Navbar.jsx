import React, { useState } from "react";
import { Link } from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export const Navbar = () => {

  const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "about", name: "About" },
    { id: 3, path: "services", name: "Services" },
    { id: 4, path: "contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];
  return (
    <nav className="text-black p-6 bg-yellow-200">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        {
          open === true ? <IoClose className="text-2xl"></IoClose> :<HiMenuAlt1 className="text-2xl"></HiMenuAlt1> 
        }
        
      </div>
      <ul className={`md:flex gap-6 duration-1000 absolute md:static ${open ? 'top-16' : '-top-70'} scroll-py-48 bg-yellow-200 z-10 px-6 shadow-lg`}>
        {
            routes.map(route => <Link key={route.id} route ={route}></Link>)
        }
      </ul>
    </nav>
  );
};

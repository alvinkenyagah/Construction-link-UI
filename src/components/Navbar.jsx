// import React, { useState } from "react";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { logo } from '../assets';
// import { Link} from "react-router-dom";

// const Navbar = () => {
//   const [nav, setNav] = useState(false);

//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
//     <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-4 text-white">
//        <img src={logo} alt='Logo' style={{display:"block", margin:"0 auto", width:"80PX", height:"auto"}} /> 
//       <div className="hidden md:flex">
//       <Link to="/"><p className="header-link">Home</p></Link>
//       <Link to="/"><p className="header-link">Account</p></Link>
//       <Link to="/SignIn"><p className="header-link">Sign In</p></Link>
//       <Link to="/SignUp"><p className="header-link">Sign Up</p></Link>
//       </div>

//       <div onClick={handleNav} className="block md:hidden">
//         {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
//       </div>

//       <div
//         className={
//           nav
//             ? "fixed left-0 top-0 h-full w-[60%] max-w-[300px] border-r border-gray-500 bg-gray-600 duration-500 ease-in-out"
//             : "fixed left-[-100vw]"
//         }
//       >

//         <img src={logo} alt='Logo' style={{display:"block", margin:"0 auto", width:"80PX", height:"auto"}} /> 

//         <ul>
//         <Link to="/"><li className="navbar-link">Home</li></Link>
//         <Link to="/Company"><li className="navbar-link">Company</li></Link>
//         <Link to="/Resources"><li className="navbar-link">Resources</li></Link>
//         <Link to="/About"><li className="navbar-link">About</li></Link>
//         <Link to="/Contact"><li className="p-4 hover:cursor-pointer hover:underline">Contact</li></Link>
//         <Link to="/SignIn"><li className="navbar-link">Sign In </li></Link>
//         <Link to="/SignUp"><li className="navbar-link">Sign Up </li></Link>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { logo } from '../assets';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="mx-auto flex h-24 max-w-screen-xl items-center justify-between px-4 text-white relative">
      <img src={logo} alt='Logo' style={{display:"block", margin:"0 auto", width:"80PX", height:"auto"}} /> 
      
      <div className="hidden md:flex">
        <Link to="/"><p className="header-link">Home</p></Link>
        <Link to="/"><p className="header-link">Account</p></Link>
        <Link to="/SignIn"><p className="header-link">Sign In</p></Link>
        <Link to="/SignUp"><p className="header-link">Sign Up</p></Link>
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineMenu size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[90%] max-w-[300px] border-r border-gray-500 bg-gray-600 duration-500 ease-in-out"
            : "fixed left-[-100vw]"
        }
      >
        <div className="relative">
          <img src={logo} alt='Logo' style={{display:"block", margin:"0 auto", width:"80PX", height:"auto"}} /> 
          <div className="absolute top-0 right-0 p-7">
            <div onClick={handleNav}>
              {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        <ul>
          <Link to="/"><li className="navbar-link">Home</li></Link>
          <Link to="/Company"><li className="navbar-link">Company</li></Link>
          <Link to="/Resources"><li className="navbar-link">Resources</li></Link>
          <Link to="/About"><li className="navbar-link">About</li></Link>
          <Link to="/Contact"><li className="p-4 hover:cursor-pointer hover:underline">Contact</li></Link>
          <Link to="/SignIn"><li className="navbar-link">Sign In </li></Link>
          <Link to="/SignUp"><li className="navbar-link">Sign Up </li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

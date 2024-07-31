import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header=()=>{

    const [btnReact,setbtnReact]=useState("Login");

    const cartItems= useSelector((store)=> store.cart.items);

    //if no dependency array then useEffect is called on every render
    //if dependency array is empyt = [] then useEffect is called on initial render
    //if dependency array is [btnreact] then useEffect is called every time btnreact is updated
    const onlinestatus=useOnlineStatus();
return(
    <div className="flex justify-between bg-green-200 shadow-md items-center p-0">
        <div className="logo-container">
            <img className="w-28" alt="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" />
        </div>

        <div className="nav-items items-center">

            <ul className="flex p-4 m-4">
                <li className="px-4">{onlinestatus===false ? "Offline🔴" : "Online🟢"}</li>
                <li className="px-4 hover:bg-green-300 hover:rounded-md "><Link to="/">Home</Link></li>
                <li className="px-4 hover:bg-green-300 hover:rounded-md "><Link to="/about">About</Link></li>
                <li className="px-4 hover:bg-green-300 hover:rounded-md "><Link to="/contact">Contact</Link></li>
                <li className="px-4 hover:bg-green-300 hover:rounded-md "><Link to="/cart">Cart {cartItems.length}</Link></li>
                
                <button className="px-4" onClick={()=>{
                    btnReact==="Login" ? setbtnReact("Logout") : setbtnReact("Login");
                }}>{btnReact}</button>
            </ul>
        </div>
    </div>

)
}
export default Header;
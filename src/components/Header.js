import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{

    const [btnReact,setbtnReact]=useState("Login");

    //if no dependency array then useEffect is called on every render
    //if dependency array is empyt = [] then useEffect is called on initial render
    //if dependency array is [btnreact] then useEffect is called every time btnreact is updated
    const onlinestatus=useOnlineStatus();
return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" alt="food-logo" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" />
        </div>

        <div className="nav-items">

            <ul>
                <li>{onlinestatus===false ? "Offline🔴" : "Online🟢"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <button className="btn" onClick={()=>{
                    btnReact==="Login" ? setbtnReact("Logout") : setbtnReact("Login");
                }}>{btnReact}</button>
            </ul>
        </div>
    </div>

)
}
export default Header;
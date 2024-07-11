import { useState,useEffect } from "react";
import { Menu_API } from "./constant";
const useRestaurantMenu=(resId)=>{
    
    const [resInfo,setresInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu= async ()=>{
        const data=await fetch(Menu_API+resId);
        const json=await data.json();
        setresInfo(json.data);
    }
    
    return resInfo;
}

export default useRestaurantMenu;
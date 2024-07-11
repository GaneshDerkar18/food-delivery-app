// import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { Menu_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu=()=>{

    // const [resInfo,setresInfo] =useState(null);
    const {resId}=useParams();
    
    const resInfo=useRestaurantMenu(resId);
    
    // useEffect(()=>{
    //     fetchMenu();
    // },[]);
    // // console.log(resId)
    // const fetchMenu= async ()=>{
    //     const data= await fetch(Menu_API+resId);
    //     const json=await data.json();
    //     console.log(json);  
    //     setresInfo(json.data)
    // }
   
    
    if (resInfo===null) return <Shimmer /> ;
    const {name,cuisines,costForTwoMessage}=resInfo?.cards?.[2]?.card?.card?.info || "Unknown Restaurant" ;

    const ItemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

    const itemcard = ItemCards[0].card.info;
    console.log(itemcard);
    
    // const name = resInfo?.cards?.[2]?.card?.card?.info?.name || "Unknown Restaurant";
    // const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines || [];
    return  (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{ cuisines.join(", ")} - {costForTwoMessage}</h3>
            {/* {console.log(itemcard)} */}
            <ul>
                {ItemCards.map(item=><li key={item.card.info.id}> {item.card.info.name} - {(item.card.info.price)/100}</li>
                )}
                
            </ul>
            

        </div>
    );
}
export default RestaurantMenu;
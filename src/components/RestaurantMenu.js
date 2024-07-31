// import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { Menu_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
const RestaurantMenu = () => {
  // const [resInfo,setresInfo] =useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);



  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || "Unknown Restaurant";

  const ItemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;

  const itemcard = ItemCards?ItemCards[0].card.info : null;
  console.log(itemcard);

  const categories =  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
      c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    
  );

  // const name = resInfo?.cards?.[2]?.card?.card?.info?.name || "Unknown Restaurant";
  // const cuisines = resInfo?.cards?.[2]?.card?.card?.info?.cuisines || [];
  return (
    <div className="text-center">
      <h1 className="font-bold my-6">{name || "unkonw "}</h1>
      {/* <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3> */}
      {/* {console.log(itemcard)} */}
     
        {/* {ItemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </li>
        ))} */}
        <div className="border">
        {
          categories && categories.map((category)=>
           
            <RestaurantCategories 
            key={category.card.card.title}
            data={category.card.card}
            />
          )
        }
        </div>
    </div>
  );
};
export default RestaurantMenu;

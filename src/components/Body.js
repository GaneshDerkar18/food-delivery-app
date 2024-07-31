import RestaurantCard,{RestaurantCardPromoted} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { res_card_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listofRestaurant, setlistofRestaurant] = useState([]);
    const [filteredres,setfilteredres] = useState([]);

    const [searchText,setsearchText] =useState("");
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
       
            const response = await fetch(
                res_card_API
            );
            const json = await response.json();
            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
            
            setlistofRestaurant(restaurants);
            setfilteredres(restaurants);
            
            console.log("restaurants");
    }

    const PromotedCard=RestaurantCardPromoted(RestaurantCard);

    const OnlineStatus=useOnlineStatus();

    if (OnlineStatus===false) return (<h1>looks like your offline,aren't you hungry</h1>);

    return listofRestaurant.length===0 ?  <Shimmer />:(
        <div className="body items-center justify-between bg-gray-100">
            <div className="filter flex justify-center">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black m-4 p-1 rounded-lg" placeholder="🔍Search" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value)
                    }} />
                    
                    <button className="px-3 py-1 m-4 bg-blue-500 rounded-md" onClick={()=>{
                        
                        console.log(searchText)
                        const filtersec=listofRestaurant.filter((e)=>
                            e.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                        );
                        setfilteredres(filtersec)
                    }} >Search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                <button className="px-3 py-1 m-4 bg-gray-300 rounded-md"
                    onClick={() => {
                        const filteredlist = listofRestaurant.filter(
                            (res) => res.info.avgRating >= 4
                        );
                        setlistofRestaurant(filteredlist);
                    }}
                    >
                    Filter Top Rated Restaurants
                </button>
                </div>
            </div>
            <div className="flex-wrap flex pl-12">
                {
                    filteredres.map((restaurant) =>
                        <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id} > 
                        {   
                            restaurant.info.promoted ? <PromotedCard resData={restaurant}/>:
                            <RestaurantCard  resData={restaurant} />
                        }
                        </Link>
                    )
                }
            </div>
        </div>
    );
}

export default Body;

import RestaurantCard from "./RestaurantCard";
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

    const OnlineStatus=useOnlineStatus();

    if (OnlineStatus===false) return (<h1>looks like your offline,aren't you hungry</h1>);

    return listofRestaurant.length===0 ?  <Shimmer />:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value)
                    }} />
                    
                    <button onClick={()=>{
                        
                        console.log(searchText)
                        const filtersec=listofRestaurant.filter((e)=>
                            e.info.name.toLowerCase().includes(searchText.toLocaleLowerCase())
                        );
                        setfilteredres(filtersec)
                    }}>Search</button>
                </div>
                <button className="filter-btn"
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
            <div className="res-container">
                {
                    filteredres.map((restaurant) =>
                        <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id} > <RestaurantCard  resData={restaurant} /></Link>
                    )
                }
            </div>
        </div>
    );
}

export default Body;

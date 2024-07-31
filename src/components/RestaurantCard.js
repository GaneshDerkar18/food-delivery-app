

const RestaurantCard=(props)=>{
    const{ resData } = props;
    const{name,avgRating,cuisines,costForTwo,areaName}= resData?.info;
    return(
        <div className="p-4 m-4 w-64 bg-white shadow-md rounded-lg transform transition-transform duration-200 hover:scale-105 h-96 flex flex-col">
            <img  className="w-full h-40 object-cover rounded-t-lg" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}/>
            <div className="p-4 flex-grow overflow-hidden">
                <h3 className="font-bold text-xl mb-2 truncate">{name}</h3>
                <div className="text-sm text-gray-700 mb-2 truncate">
                    <span className="font-semibold">Rating: </span>{avgRating}
                </div>
                <div className="text-sm text-gray-700 mb-2 truncate">
                    <span className="font-semibold">Cuisines: </span>{cuisines.join(", ")}
                </div>
                <div className="text-sm text-gray-700 mb-2 truncate">
                    <span className="font-semibold">Cost for Two: </span>{costForTwo}
                </div>
                <div className="text-sm text-gray-700 mb-2 truncate">
                    <span className="font-semibold">Area: </span>{areaName}
                </div>
                <div className="text-sm text-gray-700 truncate">
                    <span className="font-semibold">Delivery Time: </span>{resData.info.sla.deliveryTime} Minutes
                </div>
            </div>
        </div>
    );
}

export const RestaurantCardPromoted=(props)=>{
    return(
        <div>
            <label>Promoted</label>
            <RestaurantCard {...props}/>
        </div>
    );
}
export default RestaurantCard;
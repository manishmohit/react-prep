import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";
import { restaurantData } from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
    const [restauarantList, setRestauarantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN");
            const json = await data.json();
            const restaurantData = json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(restaurant => restaurant.info);
            setRestauarantList(restaurantData);
            setFilteredRestaurant(restaurantData);
        } catch (error) {
            setRestauarantList(restaurantData);
            setFilteredRestaurant(restaurantData);
        }
    };
    return !restauarantList.length ?
        (<Shimmer />)
        :
        (
            <div className="body">
                <div className="filter" >
                    <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                        <button onClick={() => {
                            const filteredRest = restauarantList.filter(res => res.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filteredRest);
                        }}>Search</button>
                    </div>
                    <button className="filter-btn"
                        onClick={() => {
                            const filteredList = restauarantList.filter(res => res.avgRating > 4);
                            setRestauarantList(filteredList)
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>
                <div className="res-container">
                    {
                        filteredRestaurant.map(restauarant => {
                            return (<RestaurantCard key={restauarant.id} resData={restauarant} />)
                        })
                    }
                </div>
            </div>
        )
};

export default Body;
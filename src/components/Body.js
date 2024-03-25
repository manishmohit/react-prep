import RestaurantCard from "../components/RestaurantCard";
import Shimmer from "../components/Shimmer";
import { restaurantData } from "../utils/mockData";
import useOnLineStatus from "../utils/useOnLineStatus"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            const restaurantData = (json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? []).map(restaurant => restaurant.info);
            setRestauarantList(restaurantData);
            setFilteredRestaurant(restaurantData);
        } catch (error) {
            setRestauarantList(restaurantData);
            setFilteredRestaurant(restaurantData);
        }
    };
    const onLineStatus = useOnLineStatus();
    if (!onLineStatus) return <h1>Looks like you are offline ! Please check your internet connection.</h1>
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
                            setFilteredRestaurant(filteredList)
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>
                <div className="res-container">
                    {
                        filteredRestaurant.map(restauarant => {
                            return (<Link key={restauarant.id} to = {"/restaurants/"+ restauarant.id}><RestaurantCard resData={restauarant} /></Link>)
                        })
                    }
                </div>
            </div>
        )
};

export default Body;
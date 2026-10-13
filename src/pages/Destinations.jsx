import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import "./Destinations.css";
import { destinations } from '../data/destinations';
import { useDispatch,useSelector } from 'react-redux';
import { addFavorite,removeFavorite } from '../features/favorites/favoriteSlice';
export default function Destination(){
  const dispatch = useDispatch();
  const favorites=useSelector((state)=>state.favorites.favorites);
  const navigate = useNavigate();
    const [search, setSearch]=useState("");
    const [category,setCategory]=useState("All");
const filteredDestinations = destinations.filter((destination)=>{
    const matchesSearch=
    destination.name.toLowerCase().includes(search.toLowerCase())|| destination.country.toLowerCase().includes(search.toLowerCase());
    const matchesCategory= category === "All" || destination.category === category;
    return matchesSearch && matchesCategory; 
})
    return(
        <div className="destinations-page">
            <section className="destinations-header">
                <p>EXPLORE THE WORLD</p>
                <h1>Discover Amazing Destinations</h1>
                <p>Find beautiful places, explore new cultures, and plan your next adventure with TravelEase.</p>
            </section>
            <section className='destinations-filters'>
                <input type="text" placeholder='Search destinations...' value={search} onChange={(e)=>setSearch(e.target.value)} />
                <div className="destinations-categories">
                    {["All","Beaches","Mountains","Historical","Wildlife","International"].map((item)=>(
                        <button key={item} className={category === item ? "active":""} onClick={()=>setCategory(item)}>{item}</button>
                    )
                    )}
                </div>
            </section>
            <section className="destinations-list">
  {filteredDestinations.length > 0 ? (
    filteredDestinations.map((destination) => (
      <div className="destination-card" key={destination.id}>
        <img src={destination.image} alt={destination.name} />

        <div className="destination-card-content">
          <span className="destination-category">
            {destination.category}
          </span>

          <h2>{destination.name}</h2>
          <p className="destination-country">{destination.country}</p>
          <p>{destination.description}</p>

          <div className="destination-card-bottom">
            <p>
              Starting from <strong>₹{destination.price.toLocaleString("en-IN")}</strong>
            </p>

            <button
              onClick={() =>navigate(`/destinations/${destination.id}`)}
            >
              Explore
            </button>
            <button onClick={()=>{
              const isFavorite = favorites.some((item)=>item.id === destination.id);
              if(isFavorite){
                dispatch(removeFavorite(destination.id));
              }
              else{
                dispatch(addFavorite(destination));
              }
            }}>{favorites.some((item)=>item.id === destination.id)? "♥ Remove Favorite":"♡ Add to Favorites"}</button>
          </div>
        </div>
      </div>
    ))
  ) : (
    <p className="no-destinations">No destinations found. Try another search.</p>
  )}
</section>
        </div>
    )
}
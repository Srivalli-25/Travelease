import {useDispatch,useSelector} from 'react-redux';
import { removeFavorite } from '../features/favorites/favoriteSlice';
import { useNavigate } from 'react-router-dom';
import "./Favorite.css"

export default function Favorites() {
    const favorites = useSelector((state)=>state.favorites.favorites);
    const dispatch = useDispatch();
    const navigate = useNavigate();
  return (
    <div className='favorites-page'>
        <section className='favorites-header'>
            <p>YOUR TRAVEL COLLECTION</p>
            <h1>My Favorite Destinations</h1>
            <p>All the beautiful places you want to explore.</p>
        </section>
      {favorites.length === 0 ? (
        <div className="favorites-empty">
            <h2>No Favorites Yet ♡</h2>
            <p>
                Explore destinations and save the places you love!
            </p>
            <button onClick={()=>navigate("/destinations")}>Explore Destinations</button>
        </div>
      ):(
        <section className='favorites-list'>
            {favorites.map((destination)=>(
                <div className="favorite-card" key={destination.id}>
                    <img src={destination.image} alt={destination.name} />
                    <div className="favorite-card-content">
                        <h2>{destination.name}</h2>
                        <p>{destination.country}</p>
                        <p>{destination.description}</p>
                        <strong>
                            ₹{destination.price.toLocaleString("en-IN")}
                        </strong>
                        <div className="favorite-actions">
                            <button type= "button" onClick={()=>navigate(`/destinations/${destination.id}`)}>Explore</button>
                            <button type='button' onClick={()=>dispatch(removeFavorite(destination.id))}>♥ Remove</button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
      )}
    </div>
  )
}

import { useState,useEffect } from "react";
import './category.styles.css';

export const Category = ({title,fetchUrl}) => {
    const [movies,setMovies] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch(fetchUrl);

                const data = await response.json();

                const {results} = data;
    
                setMovies(results)

                return response;
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[]);
    return (
        <div className="category-container">
            <h2 className="category-title">{title}</h2>
            <div className="category-items">
                {
                    movies.map(movie => <img className="movie-card" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}/>)
                }
            </div>
        </div>
    )
}
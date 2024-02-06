import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";

function Sub(){
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        
        setMovie(json.data.movie);
        setLoading(false);

        //console.log(json);
    }
    useEffect( () => {
        getMovie();
    }, []);

    return <div>
        {loading ? <Loading></Loading> : (
            <div className="sub">
                <img src={movie.large_cover_image} alt="movie thumnail" />
                <div className="content">
                    <h2>{movie.title}</h2>
                    <ul className="info">
                        <li>Year : {movie.year}</li>
                        <li>Rating : {movie.rating}</li>
                        <li>Runtime : {movie.runtime} minute</li>
                    </ul>
                    <ul className="genres">
                        {movie.genres.map(g => <li key={g}>#{g}</li>)}
                    </ul>

                    <Link to={"/"} className="btn_home">View More</Link>
                </div>
            </div>
        )}
    </div>
    
}


export default Sub;
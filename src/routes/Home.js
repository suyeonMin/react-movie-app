import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";


function Home(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response = await fetch(`https://yts.mx/api/v2/list_movies/json?minimun_rating=8.8&sort_by=year`);
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect( () => {
        getMovies();
    }, []);

    //console.log(movies);

    return (
        <div>
            {loading ? <Loading></Loading> : 
            (
                <div className="movies">
                {movies.map(item => (
                    <Movie 
                    key={item.id}
                    id={item.id}
                    coverImg={item.medium_cover_image} 
                    title={item.title} 
                    summary={item.summary} 
                    genres={item.genres} />
                ))}
                </div>
            )}
            </div>
        );
}

export default Home;
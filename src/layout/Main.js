import React, {useState, useEffect} from "react";
import Movies from "../component/Movies";
import Loader from "../component/Loader";
import Search from "../component/Search";

export default function Main() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true)

   const searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=d88e9cfe&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
             .then((response) => response.json())
             .then((data) => {
                setLoading(false);
                setMovies(data.Search);
            });

    }
    useEffect(() => {
        fetch('http://www.omdbapi.com/?apikey=d88e9cfe&s=panda')
            .then((response) => response.json())
            .then((data) => {
                setMovies(data.Search);
                setLoading(false);
            });
    }, []);

        return (
            <div className="container content">
                <Search  searchMovies={searchMovies} />
                {loading ? <Loader /> : <Movies movies={movies} />}
            </div>
        );
}

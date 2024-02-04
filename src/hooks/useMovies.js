// eslint-disable-next-line no-unused-vars
import { useState, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies";
import { useRef } from "react";
// eslint-disable-next-line no-unused-vars


export function useMovies({ search
    , sort }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const previusSearch = useRef(search);


/*     const getMovies = useMemo(() => {
        console.log("getMovies");
        return async ({ search }) => {
            if (search === previusSearch.current) return;
            console.log("useMemo getMovies");
            try {
                setLoading(true);
                setError(null);
                previusSearch.current = search;
                const newMovies = await searchMovies({ search });
                setMovies(newMovies);


            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }


        }
    }, []); */

    const getMovies = useCallback(async ({search}) => {
        if (search === previusSearch.current) return;
        try {
            console.log("useMemo getMovies");
            setLoading(true);
            setError(null);
            previusSearch.current = search;
            const newMovies = await searchMovies({ search });
            setMovies(newMovies);

        } catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);
        }
    }
    , []);





    const sortMovies = useMemo(() => {
        console.log("sortMovies");
        if (!movies) return movies;
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [movies, sort])

    return { movies: sortMovies, getMovies, loading, error };
}
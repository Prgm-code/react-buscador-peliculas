import { useState } from "react";
import "./App.css";
import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useEffect } from "react";
import { useRef } from "react";
// import { useRef } from "react";
import debounce from "just-debounce-it";
import { useCallback } from "react";

function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se ingreso ninguna pelicula");
      return;
    }
    if (search.match(/^\d+&/)) {
      setError("No se permiten números");
      return;
    }
    if (search.length < 3) {
      setError("La busqueda debe tener al menos 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search, setSearch, error };
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });
  //const inputRef = useRef();

  const useDebounce = useCallback(
    debounce((search) => {
      console.log("buscando", search);
      getMovies({ search });
    }, 500),
    [getMovies]
  );

  console.log("rendering App");

  const handleSort = () => {
    setSort(!sort);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //const query = inputRef.current.value;
    // para obtener todos los datos del formulario
    //const {query} = Object.fromEntries(new window.FormData(e.target))  ;

    /*    if (query ==="" || query === null) {
      setError("No se ingreso ninguna pelicula")
    } */
    getMovies({ search });
  };
  const useHandleChange = (e) => {
    const newQuery = e.target.value;
    if (newQuery.startsWith(" ")) {
      return;
    }
    setSearch(e.target.value);
    useDebounce(newQuery);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de Películas </h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            style={{ border: error ? "1px solid red" : "1px solid #ccc" }}
            value={search}
            onChange={useHandleChange}
            //ref={inputRef}
            name="query"
            type="text"
            placeholder="Avengers, Star Wars, The Matrix ... "
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
    </div>
  );
}

export default App;

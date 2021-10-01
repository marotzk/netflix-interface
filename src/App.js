import { useEffect, useState } from "react";
import { TMDB } from "./service/TDMD";
import styled from "styled-components";
import { MovieRow } from "./components/MovieRow";
import { GlobalStyle } from "./components/GlobalStyle";

const App = () => {

  const [movieList, setMovieList] = useState()

  
  useEffect(() => {
    const loadAll = async () => {
      var list = await TMDB.getHomeList();
      setMovieList(list);
      console.log(list);
    }

    loadAll();
  }, [])  

  if(!movieList){
    return <h1>Loading...</h1>
  }
  return (
    <div className="App">
      <GlobalStyle/>
      <Page>
        <Lists>
        {movieList.map((movie, key) => (
          <MovieRow key={key} title={movie.title} items={movie.items} />
        ))}  
        </Lists>  
      </Page>      
    </div>
  );
}

export default App;

const Page = styled.div`

`
const Lists = styled.section`

`
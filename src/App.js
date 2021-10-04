import { useEffect, useState } from "react";
import { TMDB } from "./service/TDMD";
import styled from "styled-components";
import { MovieRow } from "./components/MovieRow";
import { FeatureMovie } from "./components/FeatureMovie";
import { GlobalStyle } from "./components/GlobalStyle";

const App = () => {

  const [movieList, setMovieList] = useState();
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    // lista de filmes
    const loadAll = async () => {
      var list = await TMDB.getHomeList();
      setMovieList(list);

      // filme em destaque
      let originals = list.filter(el => el.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await TMDB.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  }, [])

  if (!movieList) {
    return <h1>Loading...</h1>
  }
  return (
    <Page className="App">
      <GlobalStyle />
      {featureData &&
        <FeatureMovie item={featureData} />
      }

      <Lists>
        {movieList.map((movie, key) => (
          <MovieRow key={key} title={movie.title} items={movie.items} />
        ))}
      </Lists>
    </Page>
  );
}

export default App;

const Page = styled.div`
  font-family: 'Roboto', sans-serif;
`
const Lists = styled.section`
  margin-top: -150px;
`
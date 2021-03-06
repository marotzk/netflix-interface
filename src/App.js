import { useEffect, useState } from "react";
import { TMDB } from "./service/TDMD";
import styled from "styled-components";
import { MovieRow } from "./components/MovieRow";
import { FeatureMovie } from "./components/FeatureMovie";
import { Header } from "./components/Header";
import { GlobalStyle } from "./components/GlobalStyle";
import { Loading } from "./components/Loading";

export const App = () => {

  const [movieList, setMovieList] = useState();
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <div className="App">
      <GlobalStyle />
      {(!movieList || movieList.length <= 0) ? <Loading/> : 
      <Page>
        <Header black={blackHeader} />
        {featureData &&
          <FeatureMovie item={featureData} />
        }

        <Lists>
          {movieList.map((movie, key) => (
            <MovieRow key={key} title={movie.title} items={movie.items} />
          ))}
        </Lists>
        <Footer>
          Feito com <span role='img' aria-label='coração'>❤</span> por Willian M. Braga. | Direitos de imagem para Netflix  |  Dados pegos do site Themoviedb.org
        </Footer>
      </Page>
      }
    </div>
  );
}

const Page = styled.div`
  font-family: 'Roboto', sans-serif;
`
const Lists = styled.section`
  margin-top: -150px;
`

const Footer = styled.footer`
  text-align: center;
  margin: 50px 0;
  span {
    color: red;
  }
`
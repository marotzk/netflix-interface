import styled from "styled-components"

export const FeatureMovie = ({item}) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for(let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return(
    <Featured style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}>
      
      <FeaturedVertical>
        <FeaturedHorizontal>
          <div className= 'name'>{item.original_name}</div>
          <FeaturedInfo>
            <div className='points'>{item.vote_average} pontos</div>
            <div className='year'>{firstDate.getFullYear()}</div>
            <div className='seasons'>
              {item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}
            </div>
          </FeaturedInfo>
          <div className='description'><p>{item.overview}</p></div>
          <FeaturedButtons>
            <a href='/' className='btn-watch'>▶ Assistir</a>
            <a href='/' className='btn-list'>+ Minha Lista</a>
          </FeaturedButtons>
          <div className='genres'><strong>Generos:</strong> {genres.join(', ')}</div>
        </FeaturedHorizontal>
      </FeaturedVertical>
    </Featured>  
  )
}

const Featured = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
`
const FeaturedVertical = styled.div`
  width: inherit;
  height: inherit;
  background: linear-gradient(to top, #111 10%, transparent 90%);
`
const FeaturedHorizontal = styled(FeaturedVertical)`
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 150px;
  padding-top: 70px;
  .name {
    font-size: 60px;
    font-weight: bold;
  }
  .description{
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 40%;
    ;
  }
  .description p {
    max-width: ;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .genres{
    margin-top: 15px;
    font-size: 18px;
    color: #999;
  }
`
const FeaturedInfo = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  
  .points,
  .year,
  .seasons{
    display: inline-block;
    margin-right: 15px;
  }
  .points{
    color: #46d369;
  }
`

const FeaturedButtons = styled.div`
  margin-top: 15px;

  .btn-watch, .btn-list{
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all ease 0.2s;
  }
  .btn-watch:hover, .btn-list:hover{
    opacity: 0.7;
  }
  .btn-watch{
    padding: 10px 25px;
    background-color: #fff;
    color: #000;
  }
  .btn-list {
    padding: 14px 25px;
    background-color: #333;
    color: #fff;
  }

`
import styled from "styled-components"

export const MovieRow = ({ title, items }) => {
  if (!items) {
    return <h1>Loading...</h1>
  }
  if (items) {
    return (
      <Movie>
        <h2>{title}</h2>
        <ListArea>
          <List>
            {items.results.length > 0 && items.results.map((item, key) => (
              <Item key={key}>
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
              </Item>
            ))}
          </List>
        </ListArea>
      </Movie>
    )
  }
}

const Movie = styled.div`
  margin-bottom: 30px;
  h2 {
    margin: 0px 0px 0px 30px;
  }
`
const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`
const List = styled.div`
  width: 999999999px;s
`
const Item = styled.div`
  display: inline-block;
  width: 150px;
  cursor: pointer;
  
  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;
  }
  img:hover {
    transform: scale(1);
  }
`
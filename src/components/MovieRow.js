import { useState } from "react";
import styled from "styled-components"
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export const MovieRow = ({ title, items }) => {
  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.results.length * 150;
    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  };

  if (!items) {
    return <h1>Loading...</h1>
  }
  if (items) {
    return (
      <Movie>
        <h2>{title}</h2>
        <div className='icon-left'>
          <NavigateBeforeIcon onClick={handleLeftArrow} />
        </div>
        <div className='icon-right' onClick={handleRightArrow}>
          <NavigateNextIcon />
        </div>
        <ListArea>
          <List style={{
            marginLeft: scrollX,
            width: items.results.length * 150
          }}>
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
  .icon-left, 
  .icon-right{
    font-weight: 600;
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all ease 0.5s;
  }
  .icon-left:hover, 
  .icon-right:hover {
    opacity: 1;
  }
  .icon-left {
    left: 0;
  }
  .icon-right {
    right: 0;
  }
`
const ListArea = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`
const List = styled.div`
  transition: all ease 0.5s;
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
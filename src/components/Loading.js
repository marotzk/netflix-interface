import styled from "styled-components"
import { Header } from "./Header"

export const Loading = () => {
  return (
    <>
      <Header />
      <Load>
        <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='preload' />
      </Load>
    </>
  )
}

const Load = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  background-color: #000;
  display: flex;
  justify-content:center;
  align-items: center;
`
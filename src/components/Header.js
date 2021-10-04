import styled from "styled-components"

export const Header = ({black}) => {
  return(
    <Wrapper style={black ? {backgroundColor: '#141414'} : {}}>
      <div className='logo'>
        <a href='/'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Logomarca Netflix'/>
        </a>
      </div>
      <div className='user'>
        <a href='/'>
            <img src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png' alt='Profile'/>
        </a>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right:0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: transparent;
  transition: all ease 0.5s;

  .logo{
    height: 25px;
  }

  .user {
    height: 35px;
  }

  .logo img {
    height: 100%;
  }

  .user img {
    height: 100%;
    border-radius: 3px;
  }
`
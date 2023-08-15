import {styled} from 'styled-components'

export const ContainerRegister = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .areaInput {
        display: flex;
        flex-direction: column;
    }

    input {
    width: 300px;
    height: 30px;
    padding-left: 5px;
    background-color: rgb(231, 243, 250);
    border: none;
    outline: none;
    margin-bottom: 15px;
  }

  .btnEnter {
    height: 40px;
    border-radius: 15px;
    font-weight: bold;
    color: black;
    font-family: 'Bellefair',serif;
    font-size: 20px;
    cursor: pointer;
  }

  .userEntry {
    font-size: 19px;
    font-weight: bold;
    color: black;
    margin-bottom: 10px;
  }

  p {
    display: flex;
    gap: 50px;
    font-size: 19px;
    color: black;
    font-weight: 400;
  }

  a {
    color: black;
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 30px;
  }
`
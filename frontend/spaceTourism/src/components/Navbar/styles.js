import { styled } from "styled-components";

export const ContainerNavbar = styled.div`
  padding-inline: 7rem;
  padding-top: 2.25rem;

  #nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }

  @media(max-width: 1024px) {
    #nav {
      /* justify-content: normal; */
      /* gap: 70px; */

    }
  }

  .hamburg {
    display: none;
    @media(max-width: 600px) {
        display: block;
    }
  }

  .containerAnotherLinks {
    height: 80px;
    width: 100%;
    max-width: 800px;
    padding-left: 80px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    backdrop-filter: blur(60px);
    padding-inline: 2rem;
  }

  .anotherLinks {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 800px;
    gap: 50px;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 20px;
  }

  span {
    color: white;
  }

  .numberNavbar {
    font-weight: bold;
  }

  .lineNavbar {
    width: 900px;
    height: 1px;
    background: white;
    z-index: 1;
  }

  @media (max-width: 1024px) {
    padding-inline-start: 3rem;

    .lineNavbar {
      display: none;
    }

    .containerAnotherLinks {
      max-width: 750px;
    }
  }

  @media (max-width: 930px) {
    .containerAnotherLinks {
      max-width: 550px;
    }
  }

  @media (max-width: 710px) {

    .anotherLinks {
      gap: 25px;
    }

    .containerAnotherLinks {
      backdrop-filter: unset;
    }

    .containerAnotherLinks {
      max-width: 390px;
    }

    #nav {
       justify-content: normal; 
       gap: 50px; 

    }

    .numberNavbar {
      display: none;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 500px;
    padding-inline-start: 0rem;

    .lineNavbar {
      display: none;
    }

    .containerAnotherLinks {
      display: none;
    }

    #nav {
      width: 100%;
      max-width: 450px; //aaaaqui
      padding-inline-start: 3rem;
      justify-content: space-between;
    }
  }

  @media (max-width: 500px) {
    #nav {
      max-width: 350px;
    }
  }

  @media (max-width: 400px) {
    #nav {
      max-width: 280px;
    }
  }

  @media (max-width: 350px) {
    #nav {
      max-width: 230px;
    }
  }
`;

export const MenuMobile = styled.div`
    
  @media(min-width: 600px) {
    display: none;
  }

  @media (max-width: 600px) {
    display: ${({ display }) => (display == 1 ? "flex" : "none")};
    overflow-y: hidden;
    flex-direction: column;
    gap: 25px;
    padding-inline-start: 2rem;
    padding-top: 5rem;
    height: 747px;
    width: 250px;
    position: absolute;
    right: 0;
    top: 0;
    color: white;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(30px);

    /* .hamburg {
      display: block;
    } */

    .numberNavbar {
      font-weight: bold;
      margin-right: 10px;
    }

    .closeMenu {
      position: absolute;
      top: 20px;
      right: 15px;
    }

    .optionsHomeM {
      color: white;
    }

    .optionMobile {
      color: white;
    }
  }
`;

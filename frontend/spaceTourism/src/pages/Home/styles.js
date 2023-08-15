import { styled } from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: white;

  #backgroundHomeMobile {
    display: none;
  }

  @media(max-width: 600px) {
    height: 700px;
    max-width: 600px;
    height: 70vh;

    #backgroundHome {
      display: none;
    }

    #backgroundHomeMobile {
    display: block;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    height: 1000px;
    width: 100%;
    max-width: 600px
    }
  }

  #backgroundHome {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 100%;
    height: 100vh;
  }
`;

export const LeftContainerHome = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;

  .soYouWant {
    width: 100%;
    max-width: 415px;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .space {
    width: 100%;
    max-width: 415px;
    font-size: 115px;
    margin-bottom: 35px;
  }

  .letsFace {
    width: 100%;
    max-width: 415px;
    line-height: 26px;
  }

  @media(max-width: 600px) {
    margin-bottom: 80px;
    margin-top: 100px;
    text-align: center;

    .soYouWant {
      font-size: 16px;
    }

    .space {
      font-size: 80px;
    }

    .letsFace {
      font-size: 15px;
    }
  }

`;

export const RightContainerHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  font-weight: 700;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  font-size: 25px;
  cursor: pointer;
`;

export const WrapperHome = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 7rem;
  padding-top: 12rem;

  @media(max-width: 600px) {
    width: 100%;
    max-width: 500px;
    justify-content: center;
    flex-direction: column;
    padding-inline: 0rem;
    padding-top: 0rem;
  }

  @media(max-width: 1024px) {
    padding-inline: 2.5rem;
  }

  @media(max-width: 710px) {
    padding-inline: 1rem;
  }
`;

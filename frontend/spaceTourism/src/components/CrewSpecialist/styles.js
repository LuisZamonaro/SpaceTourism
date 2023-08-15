import { styled } from "styled-components";

export const ContainerCrew = styled.div`
  display: ${({ display }) => (display == 2 ? "block" : "none")};

  #backgroundCrew {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 100%;
    height: 100vh;
  }

  @media (max-width: 600px) {
    #backgroundCrew  {
      height: 1100px;
    }
  }
`;

export const WrapperCrew = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 8rem;

  @media(max-width: 600px) {
    flex-direction: column-reverse;
    padding-inline: 0rem;
  }

  @media(max-width: 860px) {
    padding-inline: 2rem;
  }
`;

export const LeftContainerCrew = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  .meetYour {
    display: flex;
    gap: 30px;
    font-size: 25px;
    color: white;
    letter-spacing: 2px;
    margin-top: 30px;
  }

  .meetYourM {
    display: none;
  }

  #numberCrew {
    color: gray;
    font-weight: bold;
  }

  .chargeEmployee {
    color: gray;
    font-size: 33px;
    margin-top: 150px;
    margin-bottom: 20px;
  }

  .nameEmployee {
    color: white;
    font-size: 42px;
    margin-bottom: 55px;
  }

  .textLeft {
    color: white;
    line-height: 26px;
    margin-bottom: 150px;
  }

  .btnArea {
    display: flex;
    gap: 15px;
  }

  .btnCrew {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: white;
    opacity: 0.3;
    cursor: pointer;
  }

  .btnCrew:hover {
    background-color: white;
    opacity: .9;
}

#btnCrew {
    background-color: white;
    opacity: .9;
}

@media(max-width: 860px) {
  .meetYour {
    margin-top: 30px;
  }
}

@media(max-width: 600px) {
  align-items: center;
  text-align: center;
  .meetYour {
    display: none;
  }

  .chargeEmployee {
    margin-top: 40px;
    font-size: 20px;
  }

  .textLeft {
    margin-bottom: 50px;
    width: 250px;
  }

  .nameEmployee {
    margin-bottom: 20px;
    font-size: 30px;
  }

  .btnArea {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
`;
export const RightContainerCrew = styled.div`
  display: flex;
  flex-direction: column-reverse;

  #charCrew {
    margin-top: 83px;
    height: 500px;
  }

  .meetYourM {
    display: none;
  }

  @media(max-width: 960px) {
    #charCrew {
      height: 350px;
    }
  }

  @media(max-width: 600px) {
    align-items: center;

    #charCrew {
      height: 300px;
      margin-top: 25px;
    }

    .meetYourM {
    display: block;
    display: flex;
    gap: 30px;
    font-size: 18px;
    color: white;
    letter-spacing: 2px;
    margin-top: 20px;
  }

  #numberCrew {
    color: gray;
    font-weight: bold;
  }

  .imageChar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .lineCrew {
    width: 300px;
    height: 1px;
    background: #383B4B;
  }

  }
`;

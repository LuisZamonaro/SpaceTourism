import { styled } from "styled-components";

export const ContainerTech = styled.div`
  display: ${({ display }) => (display == 2 ? "block" : "none")};

  #backgroundTech {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 100%;
    height: 100vh;
  }
`;

export const WrapperTech = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline-start: 13rem;

  @media (max-width: 1425px){
    padding-inline-start: 2rem;
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    padding-inline-start: 0rem;
  }
`;

export const LeftContainerTech = styled.div`
  .numberTech {
    gap: 20px;
    color: gray;
    font-weight: bold;
    font-size: 26px;
  }

  .spaceLaunch {
    display: flex;
    gap: 20px;
    color: white;
    font-size: 26px;
    margin-bottom: 150px;
    margin-top: 40px;
  }

  .leftTechContent {
    display: flex;
  }

  .numbersOptionsTech {
    display: flex;
    flex-direction: column;
    gap: 30px;
    height: 300px;
    width: 200px;
  }

  .btnTech {
    border-radius: 50%;
    width: 80px;
    height: 100px;
    font-size: 50px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .textsTech {
    width: 500px;
    color: white;
  }

  .theTerm {
    font-size: 14px;
    margin-bottom: 15px;
    margin-top: 10px;
  }

  .launchVeicle {
    font-size: 50px;
    margin-bottom: 30px;
  }

  .textTech {
    line-height: 28px;
  }

  @media (max-width: 1425px) {
    .numbersOptionsTech {
      width: 100px;
    }

    .textsTech {
      width: 300px;
    }
  }

  @media (max-width: 890px) {

    .textsTech {
      width: 205px;
      font-size: 14px;
    }

    .launchVeicle {
      font-size: 38px;
    }

    .btnTech {
      width: 40px;
      height: 40px;
      font-size: 25px;
    }

    .numbersOptionsTech {
      width: 60px;
    }
  }

  @media (max-width: 600px) {

    .spaceLaunch {
      display: none;
    }

    .leftTechContent {
        align-items: center;
        flex-direction: column;
    }

    .numbersOptionsTech {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        height: 100px;
        width: 200px;
    }

    .btnTech {
        font-size: 25px;
        width: 100px;
        height: 50px;
    }

    .textsTech {
        text-align: center;
    }
  }
`;

export const RightContainerTech = styled.div`
  .imageTech {
    margin-top: 150px;
  }

  .imgTechM {
    display: none;
  }

  .spaceLaunchM {
    display: none;
  }

  @media (max-width: 1425px) {
    .imgTech {
      width: 450px;
    }
  }

  @media (max-width: 890px) {
    .imgTech {
      width: 300px;
    }
  }

  @media (max-width: 650px) {
    .imgTech {
      width: 250px;
    }
  }

  @media (max-width: 600px) {
    .imgTech {
      display: none;
    }

    .spaceLaunchM {
      display: block;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      color: white;
      font-size: 26px;
      margin-bottom: 25px;
      margin-top: 20px;
    }

    .numberTech {
    gap: 20px;
    color: gray;
    font-weight: bold;
    font-size: 26px;
  }

  .imgTechM {
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 600px;
  }

  .imageTech {
    margin-top: 0px;
  }
  }
`;

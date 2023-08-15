import {styled} from 'styled-components'

export const ContainerEuropa = styled.div`
    display:${({display}) => display == 2 ? "block" : "none"};
    
    #backgroundDestination {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        width: 100%;
        height: 100vh;
    }

    @media (max-width: 600px) {
    #backgroundDestination {
      height: 1000px;
    }
  }
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 12rem;

    .pickYour {
        display: flex;
        gap: 30px;
        color: white;
        font-size: 25px;
        margin-bottom: 60px;
        margin-top: 60px;
    }

    #numberDestination {
        color: gray;
        font-weight: 700;
    }

    @media (max-width: 940px) {
    padding-inline: 1rem;

    .imgMoon {
      width: 300px;
    }
  }

  @media (max-width: 650px) {
    .imgMoon {
      width: 200px;
    }
  }

    @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    padding-inline: 0px;

    .imgMoon {
      width: 200px;
    }

    .pickYour {
      font-size: 17px;
      letter-spacing: 3px;
      margin-top: 20px;
      margin-bottom: 15px;
    }
}
`

export const LeftContainerDestination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const RightContainerDestination = styled.div`
    width: 100%;
    max-width: 400px;

    .moons {
        display: flex;
        align-items: center;
        color: white;
        letter-spacing: 1px;
        font-size: 14px;
        gap: 30px;
        margin-bottom: 40px;
        margin-top: 50px;
    }

    .actualMoon {
        font-size: 90px;
        color: white;
        margin-bottom: 30px;
    }

    .textMoon {
        color: white;
        line-height: 26px;
        margin-bottom: 50px;
        color: #d0d6f9;
    }

    .infoMoons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        border-top: 1px solid white;
    }

    .infoMoonsTop {
        font-size: 13px;
        margin-top: 25px;
        margin-bottom: 8px;
    }

    .infoMoonsBottom {
        font-size: 25px;
    }

    @media (max-width: 600px) {
    text-align: center;

    .moons {
      justify-content: center;
      font-size: 14px;
      margin-bottom: 20px;
      margin-top: 25px;
    }

    .actualMoon {
        font-size: 58px;
        margin-bottom: 20px;
    }

    .infoMoons {
        flex-direction: column;
    }
}
`
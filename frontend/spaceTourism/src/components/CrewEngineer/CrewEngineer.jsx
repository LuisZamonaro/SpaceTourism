import *as S from './styles'
import backgCrew from '../../starter-code/assets/crew/background-crew-desktop.jpg'
import imgEngineer from '../../starter-code/assets/crew/image-anousheh-ansari.webp'
import { useContext } from 'react'
import { OpenComponent } from '../../context/openComponentContext'

const CrewEngineer = () => {

const { openComp, setOpenComp } = useContext(OpenComponent)


    return (
        <S.ContainerCrew display={openComp} >
            <img id='backgroundCrew' src={backgCrew} />
            <S.WrapperCrew>
                <S.LeftContainerCrew>
                    <div className="meetYour">
                        <span id='numberCrew'>02</span> MEET YOUR CREW
                    </div>
                    <div className="chargeEmployee">
                        FLIGHT ENGINEER
                    </div>
                    <div className="nameEmployee">
                        ANOUSHEH ANSARI
                    </div>
                    <div className="textLeft">
                        Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems.
                        Ansari was the fourth self-funded space tourist, the first self-funded woman to
                        fly to the ISS, and the first Iranian in space.
                    </div>
                    <div className="btnArea">
                        <button className='btnCrew'onClick={() => setOpenComp(0)}></button>
                        <button className='btnCrew'onClick={() => setOpenComp(1)}></button>
                        <button className='btnCrew'onClick={() => setOpenComp(2)}></button>
                        <button id='btnCrew' className='btnCrew'onClick={() => setOpenComp(3)}></button>
                    </div>
                </S.LeftContainerCrew>
                <S.RightContainerCrew>
                    <div className="imageChar">
                        <img id='charCrew' src={imgEngineer} />
                        <div className="lineCrew"></div>
                    </div>
                    <div className="meetYourM">
                        <span id='numberCrew'>02</span> MEET YOUR CREW
                    </div>
                </S.RightContainerCrew>
            </S.WrapperCrew>
        </S.ContainerCrew>
    )
}

export default CrewEngineer
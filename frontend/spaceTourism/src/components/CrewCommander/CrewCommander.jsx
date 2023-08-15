import *as S from './styles'
import imgCommander from '../../starter-code/assets/crew/image-douglas-hurley.webp'
import backgCrew from '../../starter-code/assets/crew/background-crew-desktop.jpg'
import { useContext } from 'react'
import { OpenComponent } from '../../context/openComponentContext'

const CrewCommander = () => {

    const { openComp, setOpenComp } = useContext(OpenComponent)

    return (
        <S.ContainerCrew display={openComp}>
            <img id='backgroundCrew' src={backgCrew} />
            <S.WrapperCrew>
                <S.LeftContainerCrew>
                    <div className="meetYour">
                        <span id='numberCrew'>02</span> MEET YOUR CREW
                    </div>
                    <div className="chargeEmployee">
                        COMMANDER
                    </div>
                    <div className="nameEmployee">
                        DOUGLAS HURLEY
                    </div>
                    <div className="textLeft">
                        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
                        and former NASA astronaut. He launched into space for the third time as
                        commander of Crew Dragon Demo-2.
                    </div>
                    <div className="btnArea">
                        <button id='btnCrew' className='btnCrew'onClick={() => setOpenComp(0)}></button>
                        <button className='btnCrew'onClick={() => setOpenComp(1)}></button>
                        <button className='btnCrew'onClick={() => setOpenComp(2)}></button>
                        <button className='btnCrew'onClick={() => setOpenComp(3)}></button>
                    </div>
                </S.LeftContainerCrew>
                <S.RightContainerCrew>
                    <div className="imageChar">
                        <img id='charCrew' src={imgCommander} />
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

export default CrewCommander
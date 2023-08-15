import *as S from './styles'
import backgCrew from '../../starter-code/assets/crew/background-crew-desktop.jpg'
import imgPilot from '../../starter-code/assets/crew/image-victor-glover.webp'
import { useContext } from 'react'
import { OpenComponent } from '../../context/openComponentContext'

const CrewPilot = () => {

    const { openComp, setOpenComp } = useContext(OpenComponent)

    return (
        <S.ContainerCrew  display={openComp}>
            <img id='backgroundCrew' src={backgCrew} />
            <S.WrapperCrew>
                <S.LeftContainerCrew>
                    <div className="meetYour">
                        <span id='numberCrew'>02</span> MEET YOUR CREW
                    </div>
                    <div className="chargeEmployee">
                        PILOT
                    </div>
                    <div className="nameEmployee">
                        VICTOR GLOVER
                    </div>
                    <div className="textLeft">
                        Pilot on the first operational flight of the SpaceX Crew Dragon to the
                        International Space Station. Glover is a commander in the U.S. Navy where
                        he pilots an F/A-18.He was a crew member of Expedition 64, and served as a
                        station systems flight engineer.
                    </div>
                    <div className="btnArea">
                        <button className='btnCrew'onClick={() => setOpenComp(0)}></button>
                        <button id='btnCrew' className='btnCrew'onClick={() => setOpenComp(1)}></button>
                        <button className='btnCrew'onClick={() => setOpenComp(2)}></button>
                        <button className='btnCrew'onClick={() => setOpenComp(3)}></button>
                    </div>
                </S.LeftContainerCrew>
                <S.RightContainerCrew>
                    <div className="imageChar">
                        <img id='charCrew' src={imgPilot} />
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

export default CrewPilot
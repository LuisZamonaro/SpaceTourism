import *as S from './styles'
import backgCrew from '../../starter-code/assets/crew/background-crew-desktop.jpg'
import imgSpecialist from '../../starter-code/assets/crew/image-mark-shuttleworth.webp'
import { useContext } from 'react'
import { OpenComponent } from '../../context/openComponentContext'

const CrewSpecialist = () => {

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
                        MISSION SPECIALIST
                    </div>
                    <div className="nameEmployee">
                        MARK SHUTTLEWORTH
                    </div>
                    <div className="textLeft">
                        Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind
                        the Linux-based Ubuntu operating system. Shuttleworth became the first South
                        African to travel to space as a space tourist.
                    </div>
                    <div className="btnArea">
                        <button className='btnCrew'onClick={() => setOpenComp(0)}></button>
                        <button className='btnCrew'onClick={() => setOpenComp(1)}></button>
                        <button id='btnCrew' className='btnCrew'onClick={() => setOpenComp(2)}></button>
                        <button className='btnCrew'onClick={() => setOpenComp(3)}></button>
                    </div>
                </S.LeftContainerCrew>
                <S.RightContainerCrew>
                    <div className="imageChar">
                        <img id='charCrew' src={imgSpecialist} />
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

export default CrewSpecialist
import CrewCommander from "../../components/CrewCommander/CrewCommander"
import CrewEngineer from "../../components/CrewEngineer/CrewEngineer"
import CrewPilot from "../../components/CrewPilot/CrewPilot"
import CrewSpecialist from "../../components/CrewSpecialist/CrewSpecialist"
import { useContext, useEffect } from "react"
import { OpenComponent } from "../../context/openComponentContext"

const Crew = () => {

  const { setOpenComp } = useContext(OpenComponent)

  useEffect(() => {
    const interval = setInterval(() => {
        setOpenComp((prevSlide) => (prevSlide + 1) % totalSlides)
    }, 7000)

    return () => clearInterval(interval)
}, [setOpenComp])

const totalSlides = 4

  return (
    <div className="containerCrew">
      <div className="wrapperCrew">
        <CrewCommander />
        <CrewPilot />
        <CrewSpecialist />
        <CrewEngineer />
      </div>
    </div>
  )
}

export default Crew
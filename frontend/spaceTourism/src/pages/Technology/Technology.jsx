import TechSpaceCapsule from "../../components/TechSpaceCapsule/TechSpaceCapsule"
import TechSpaceport from "../../components/TechSpaceport/TechSpaceport"
import TechVeicle from "../../components/TechVehicle/TechVehicle"


const Technology = () => {
  return (
    <div className="containerTechnology">
      <TechVeicle />
      <TechSpaceport />
      <TechSpaceCapsule />
    </div>
  )
}

export default Technology
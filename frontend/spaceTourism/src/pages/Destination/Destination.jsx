
import Europa from "../../components/Europa/Europa"
import Mars from "../../components/Mars/Mars"
import Moon from "../../components/Moon/Moon"
import Titan from "../../components/Titan/Titan"


const Destination = () => {
  return (
    <div className="containerDestination">
      <div className="wrapperDestination">
        <Moon />
        <Mars />
        <Europa />
        <Titan />
      </div>
    </div>
  )
}

export default Destination
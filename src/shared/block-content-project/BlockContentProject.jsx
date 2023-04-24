import './block-content-project.scss'
import Parameter from "../../entities/parameter/ui/Parameter";



const BlockContentProject = (props) => {

  return (
    <div>
      <Parameter parameterId={props.parameterId} />
    </div>
  )
}

export default BlockContentProject
import './block-content-project.scss'
import Parameter from "../../entities/parameter/ui/Parameter";
import React from "react";



const BlockContentProject = (props) => {

  return (
    <div>
      <Parameter parameterId={props.parameterId} />
    </div>
  )
}

export default BlockContentProject
import React from "react";
import './block-architect.scss'
import ArchitectElement from "../../entities/architect/ui/ArchitectElement";

const BlockArchitect = (props) => {

  return (
    <div>
      <ArchitectElement userId={props.architectId} />
    </div>
  )
}

export default BlockArchitect

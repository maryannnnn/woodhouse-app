import React from "react";
import './block-architect.scss'
import UserElement from "../../entities/user/ui/UserElement";

const BlockArchitect = (props) => {

  return (
    <div>
      <UserElement userId={props.architectId} />
    </div>
  )
}

export default BlockArchitect

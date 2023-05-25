import './block-content-project.scss'
import Parameter from "../../entities/parameter/ui/Parameter";
import React from "react";


const BlockContentProject = ({parameter}) => {
    return (
        <div>
            <Parameter parameter={parameter}/>
        </div>
    )
}

export default BlockContentProject
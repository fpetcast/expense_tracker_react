import  React , {useContext, useState, useRef}  from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare , faPlus, faList} from '@fortawesome/free-solid-svg-icons'

function Tool(props) {
    const {toolAction} = useContext(GlobalContext);

    const tool = props.tool
    const icon = props.icon 

    console.log(tool);
    console.log(icon);

    function getIcon(type) { 
        switch (type) {
            case 'pen':
                return faPenToSquare;
                break;
            case 'plus':
                return faPlus
                break;
            case 'list':
                return faList
                break;
            default:
                break;
        }
     }

     function triggerAction(e) {
        console.log(tool.type);
        toolAction({
            type: tool.type,
            icon: icon
        })
     }

    return(
        <button onClick={triggerAction} data-type={tool.type} data-edit={tool.editView ? true : false} className={"tool-btn " + tool.type}>
            <FontAwesomeIcon icon={tool.type == 'edit' ? getIcon(icon) : getIcon(tool.icon)} data-type={tool.type} className="tool-icon" data-edit={tool.editView ? true : false}></FontAwesomeIcon>
        </button>
    );
    
}

export default Tool;
import  React , {useContext, useRef}  from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare , faPlus} from '@fortawesome/free-solid-svg-icons'

function ToolBar() {
    const {tools, toolAction} = useContext(GlobalContext);

    function getIcon(type) { 
        switch (type) {
            case 'pen':
                return faPenToSquare;
                break;
            case 'plus':
                return faPlus
                break;
            default:
                break;
        }
     }

     function triggerAction(e) {
        toolAction({
            type: e.target.getAttribute('data-type')
        })
     }

    const tool = tools.map((tool, index) => 
    <div key={index} className="tool">
        <button onClick={triggerAction} data-type={tool.type} className={"tool-btn " + tool.type}>
            <FontAwesomeIcon icon={getIcon(tool.icon)} data-type={tool.type} className="tool-icon"></FontAwesomeIcon>
        </button>
    </div>
    )

    return(
        <div className="tool-bar">
            {tool}
        </div>
    )
}

export default ToolBar;
import  React , {useContext, useRef}  from "react";
import Tool from './Tool'
import { GlobalContext } from "../context/GlobalState";

function ToolBar() {
    const {tools} = useContext(GlobalContext);

    return(
        <div className="tool-bar">
            {tools.map((tool,index) => 
                <div key={index} className="tool">
                  <Tool tool={tool} icon={tool.type == 'edit' && tool.editView == false ? 'pen' : 'list'}/>
                </div>
            )}
        </div>
    )
}

export default ToolBar;
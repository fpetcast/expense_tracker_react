import  React, {useContext, useState}  from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'

function Button(props) {
    const [active, setActive] = useState(false);
    const {btnFilter} = useContext(GlobalContext);

    const className = props.class;
    const btnText = props.text;
    const type = props.type;
    const icon = props.icon;

    function switchFilter(e) {  
        btnFilter({
            type: type
        })
    }
    
    if(btnText){
        return (
            <button onClick={switchFilter} className={className}>{btnText}</button>
        )
    }
    return (
        <FontAwesomeIcon onClick={switchFilter} icon={faFilterCircleXmark} className="filter-icon" /> 
    )

}

export default Button;
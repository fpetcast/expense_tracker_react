import  React, {useContext, useState}  from "react";
import { GlobalContext } from "../context/GlobalState";


function Button(props) {
    const [active, setActive] = useState(false);
    const {btnFilter} = useContext(GlobalContext);

    const className = props.class;
    const btnText = props.text;
    const type = props.type

    function switchFilter(e) {  
        btnFilter({
            type: type
        })
    }

    return (
        <button onClick={switchFilter} className={className}>{btnText}</button>
    );

}

export default Button;
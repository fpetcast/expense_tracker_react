import React from "react";

function Transactions() {
        return(
            <div className="transactions">
                <h3>History</h3>
                <ul className="list">
                    <li className="minus">
                    Cash <span>-$400</span><button className="delete-btn">x</button>
                    </li>
                    <li className="plus">
                    Cash <span>-$520</span><button className="delete-btn">x</button>
                    </li>
                </ul>
            </div>
        )
}

export default Transactions;
import React from "react";

class Transactions extends React.Component {
    render() {
        return(
            <div className="transactions">
                <h3>History</h3>
                <ul className="list">
                    <li className="minus">
                    Cash <span>-$400</span><button class="delete-btn">x</button>
                    </li>
                    <li className="plus">
                    Cash <span>-$520</span><button class="delete-btn">x</button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Transactions;
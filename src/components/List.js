import React from "react";

import Todo from "./Todo"

const List = ({ list }) => {
    const renderedList = list.map((item) => <Todo title={item.title} completed={item.completed} key={item.title} /> );
    return(
        <div className="ui container">
            <div className="ui grid center aligned">
                {renderedList}
            </div>
        </div>
    );
}

export default List;
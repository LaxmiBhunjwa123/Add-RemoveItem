import React from "react";

function User(props){
    const {data} = props;
    return(
        <div>
            <h1>User Page</h1>
            <h3>{data.name}</h3>
            <h3>{data.age}</h3>
        </div>
    )
}

export default User;
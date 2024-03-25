import { useState } from "react";
const User = ({name}) => {
    const [count] = useState(0);
    return (
        <div className="user-card">
            <h1>Count : {count}</h1>
            <h2>Name : {name}</h2>
            <h2>Location : Noida</h2>
            <h2>Contact : manish.mohit2110@gmail.com </h2>
        </div>
    );
};
export default User;
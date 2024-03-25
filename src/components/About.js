// import User from "./User"
import React from "react";
import UserClass from "./UserClass"

class About extends React.Component {
    constructor(props) {
        super(props)
        console.log("Parent constructor")
    }

    componentDidMount() {
        console.log("Parent component did mount")
    }

    render() {
        console.log("Parent render")
        return (
            <div>
                <h1>About</h1>
                <h2>This is a learning project.</h2>
                <UserClass name={"Manish Mishra (classes)"} location={"Noida (classes)"} />
            </div >
        )
    }
}
// const About = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is a learning project.</h2>
//             <UserClass name= {"Manish Mishra (classes)"} location= {"Noida (classes)"} /> 
//         </div>
//     );
// };

export default About;
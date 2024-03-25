import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userInfo : {
                name : "Dummy",
                location: "Default",
                avatar_url: "Default",
            }
        }
        console.log("child constructor")
    }

    async componentDidMount() {
        const data = await fetch('https://api.github.com/users/manishmohit')
        const info = await data.json();
        this.setState({
            userInfo: info
        })
        console.log("child component did mount")
    }
    componentDidUpdate() {
        console.log("child component did update")
    }
    componentWillUnmount() {
        console.log("child component did unmount")
    }
    render() {
        // console.log("child render")
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="user-card">                
                <h2>Name : {name}</h2>
                <h2>Location : {location}</h2>
                <h2>Contact : manish.mohit2110@gmail.com </h2>
            </div>
        )
    };
};

export default UserClass
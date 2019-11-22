import React from "react";
import "./Profile.css"


class ProfileNav extends React.Component {

    render () {

    return <div id="profileNavBar">
            <ul id="profileNavLinks">
                <li>Tweets</li>
                <li>Likes</li>
                    {/* use NavLinks in the li */}

            </ul>
        </div>


    
}}
export default ProfileNav
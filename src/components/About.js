import React from "react";

function About(props) {
    const imgToShow = props.image || "https://via.placeholder.com/215";

    return (
        <aside>
            <img src={imgToShow} alt="blog logo" />
            <p>{props.about}</p>
        </aside>
    );
}

export default About;
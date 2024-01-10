import React from "react";

function Article(props) {
    const Date = props.posts.date || "January 1, 1970";

    const formatReadTime = (posts) => {
        if (posts.minutes < 30) {
            const coffeeCups = Math.ceil(posts.minutes / 5);
            return "☕️".repeat(coffeeCups) + ` ${posts.minutes} min read`;
        } else {
            const bentoBoxes = Math.ceil(posts.minutes / 10);
            return "🍱".repeat(bentoBoxes) + ` ${posts.minutes} min read`;
        }
    };

    return (
        <article>
            <h3>{props.posts.title}</h3>
            <small>{Date} - {formatReadTime(props.posts)}</small>
            <p>{props.posts.preview}</p>
        </article>
    );
}

export default Article;
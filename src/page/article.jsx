import React from "react";
import "./totalStyles.css";
import { Link } from 'react-router-dom'
const Article = ({ article }) => {
    return (
        <div>
            <article className="item_article">
                <img className="item_img" src={article.imageUrl} alt=""></img>
                <Link className="article_header_a" to={`/articles/${article.id}`}>
                    <h2 className="article_header">{article.title}</h2>
                </Link>
            </article>

        </div>

    )
}
export default Article
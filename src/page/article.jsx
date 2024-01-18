import React from "react";
import "./totalStyles.css";
import {Link} from 'react-router-dom'
const Article =({article})=>{
    return(
        <div>
 <article className="item_article">
 <img className="item_img" src={article.imageUrl} alt="ddsdd"></img> 
            <Link to={`/Articles/${article.id}`}>
            <h2 className="article_header">{article.title}</h2>
            </Link>
            {/* <a className="article_src" href="#"></a> */}
            </article>
            <article className="item_article">
 <img className="item_img" src={article.imageUrl} alt="ddsdd"></img> 
            <Link to={`/Articles/${article.id}`}>
            <h2 className="article_header">{article.title}</h2>
            </Link>
            {/* <a className="article_src" href="#"></a> */}
            </article>
            <article className="item_article">
 <img className="item_img" src={article.imageUrl} alt="ddsdd"></img> 
            <Link to={`/Articles/${article.id}`}>
            <h2 className="article_header">{article.title}</h2>
            </Link>
            {/* <a className="article_src" href="#"></a> */}
            </article>
        </div>

    )
}
export default Article
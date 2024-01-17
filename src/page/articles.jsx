
import React from "react";
import "./totalStyles.css"
import { Link } from "react-router-dom";
const Articles=(article)=>{
    return(
       <div className="articls_container">
         <article className="item_article">
            <img className="item_img" src="#" alt="ddsdd"></img>
            <Link to='/Articles/:id'>
            <h2 className="article_header"> Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago</h2>
            </Link>
            <a className="article_src" href="https://www.reuters.com/article">https://www.reuters.com/article</a>
        </article>
        <article className="item_article">
            <img className="item_img" src="#" alt="ddsdd"></img>
            <h2 className="article_header"> Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago</h2>
            <a className="article_src" href="https://www.reuters.com/article">https://www.reuters.com/article</a>
        </article>
        <article className="item_article">
            <img className="item_img" src="#" alt="ddsdd"></img>
            <h2 className="article_header"> Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago</h2>
            <a className="article_src" href="https://www.reuters.com/article">https://www.reuters.com/article</a>
        </article>
       </div>
      
    )
}
export default Articles;
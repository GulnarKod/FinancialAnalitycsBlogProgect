
import React from "react";
import "./totalStyles.css"
import { Link } from "react-router-dom";
const Articles=()=>{
    return(
       <div className="articls_container">
         <article className="item_article">
            <img className="item_img" src="https://images.mktw.net/im-299272" alt="ddsdd"></img>
            <Link to='/Articles/:1'>
            <h2 className="article_header"> Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago</h2>
            </Link>
            {/* <a className="article_src" href="#"></a> */}
        </article>
        <article className="item_article">
            <img className="item_img" src="https://images.mktw.net/im-299199" alt="ddsdd"></img>
            <Link to='/Articles/:2'>
            <h2 className="article_header"> Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago</h2>
            </Link>
            {/* <a className="article_src" href="https://www.reuters.com/article">https://www.reuters.com/article</a> */}
        </article>
        <article className="item_article">
            <img className="item_img" src="https://images.barrons.com/im-298906" alt="ddsdd"></img>
            <Link to='/Articles/:3'>
            <h2 className="article_header"> Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago</h2>
            </Link>
            {/* <a className="article_src" href="https://www.reuters.com/article">https://www.reuters.com/article</a> */}
        </article>
        <article className="item_article">
            <img className="item_img" src="https://images.barrons.com/im-298906" alt="ddsdd"></img>
            <Link to='/Articles/:4'>
            <h2 className="article_header"> Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago</h2>
            </Link>
            {/* <a className="article_src" href="https://www.reuters.com/article">https://www.reuters.com/article</a> */}
        </article>
       </div>
      
    )
}
export default Articles;
import React from "react";
import AnalystsComment from "./AnalystsComment";

const ArticleDetailInfo=(props)=>{
    return(
    <div className="articls_container">
         <article className="item_article">
            <img className="item_img" src="#" alt="ddsdd"></img>
    
            <h2 className="article_header"> Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago</h2>
        <AnalystsComment/>
        </article>
    </div>       
    )
}
export default ArticleDetailInfo;
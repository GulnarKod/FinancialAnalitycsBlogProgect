import React from "react";
import "./totalStyles.css"
import AnalystsComment from "./analystsComment";

const ArticleDetailInfo = ({article}) => {
    return (
        <div className="detail_articl_container">
            <h2 className="detail_article_header">{article.title} </h2>
            <img className="detail_item_img" src={article.imageUrl} alt="ddsdd"></img>
            <p className="detail_article_text">{article.description}</p>
            <AnalystsComment /> 
        </div>
    )
}
export default ArticleDetailInfo;
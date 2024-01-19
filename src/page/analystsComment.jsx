import React from 'react'
import "./totalStyles.css";
const AnalystsComment = ({article}) => {
    return (
        <div className='commentToArticle_container'>
            <div className='commentToArticle_post'>
                <h3 className='commentToArticle_header' >Experts Comment</h3>
                <p>{article.expertComment}</p >
            </div>
            </div>
)
}

export default AnalystsComment;
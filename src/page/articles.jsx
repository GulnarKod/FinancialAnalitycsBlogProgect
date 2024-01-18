
import React, { useEffect, useState } from "react";
import "./totalStyles.css"
import { Link } from "react-router-dom";
import { db } from "../firebase/firebase";
import { query, collection, onSnapshot } from "firebase/firestore";
import Article from './article';
const Articles=()=>{
    const [articles, setArticles]=useState([]);
useEffect(()=>{
    const queryData=query(collection(db, 'articles'))
const unsubscribe=onSnapshot(queryData,(querySnapshot)=>{
    let articlesArr=[];
   querySnapshot.forEach((doc)=>{
    articlesArr.push({...doc.data(),id:doc.id});
   });
   setArticles(articlesArr);
    })
    return ()=> unsubscribe();
},[]);
    return(
       <div className="articls_container">
         
         {articles.map((a) => <Article key={a.id} article={a} />)}
{/* 
        <article className="item_article">
            <img className="item_img" src="https://images.mktw.net/im-299199" alt="ddsdd"></img>
            <Link to='/Articles/:2'>
            <h2 className="article_header"> Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago</h2>
            </Link>
        <a className="article_src" href="https://www.reuters.com/article">https://www.reuters.com/article</a> 
     </article>
        <article className="item_article">
            <img className="item_img" src="https://images.barrons.com/im-298906" alt="ddsdd"></img>
            <Link to='/Articles/:3'>
            <h2 className="article_header"> Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago</h2>
            </Link>
            {/* <a className="article_src" href="https://www.reuters.com/article">https://www.reuters.com/article</a> */}
        {/* </article>
        <article className="item_article">
            <img className="item_img" src="https://images.barrons.com/im-298906" alt="ddsdd"></img>
            <Link to='/Articles/:4'>
            <h2 className="article_header"> Reddit user claiming to be Tesla insider appeared to reveal bitcoin buy a month ago</h2>
            </Link> */}
            {/* <a className="article_src" href="https://www.reuters.com/article">https://www.reuters.com/article</a> */}
        {/* </article> */}
       </div>
    )
}
export default Articles;
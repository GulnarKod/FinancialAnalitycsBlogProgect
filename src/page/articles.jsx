
import React, { useEffect, useState } from "react";
import "./totalStyles.css";
import { db } from "../firebase/firebase";
import { query, collection, onSnapshot } from "firebase/firestore";
import Article from './article';
const Articles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const queryData = query(collection(db, 'articles'))
        const unsubscribe = onSnapshot(queryData, (querySnapshot) => {
            let articlesArr = [];
            querySnapshot.forEach((doc) => {
                articlesArr.push({ ...doc.data(), id: doc.id });
            });
            setArticles(articlesArr);
        })
        return () => unsubscribe();
    }, []);
    return (
        <div className="articls_container">
            {articles.map((a) => <Article key={a.id} articles={a} />)}
        </div>
    )
}
export default Articles;
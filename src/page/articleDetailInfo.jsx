import React, { useEffect, useState } from "react";
import "./totalStyles.css";
import { useParams } from 'react-router-dom';
import { db } from "../firebase/firebase";
import { getDoc, doc } from "firebase/firestore";

import AnalystsComment from "./analystsComment";

const ArticleDetailInfo = () => {
  const { id } = useParams();
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const docRef = doc(db, "articles", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setArticle({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.log("Статья не найдена");
        }
      } catch (error) {
        console.error("Ошибка при получении данных статьи:", error);
      }
    };

    fetchArticle();
  }, [id]);
    return (
        <div className="detail_articl_container">
        {article ? (
          <>
            <h2 className="detail_article_header">{article.title}</h2>
            <img className="detail_item_img" src={article.imageUrl} alt='' />
            <p className="detail_article_text">{article.description}</p>
            <AnalystsComment article={article}/>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
}
export default ArticleDetailInfo;
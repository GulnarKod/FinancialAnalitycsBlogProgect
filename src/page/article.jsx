
import "./totalStyles.css";
import { Link } from 'react-router-dom'
const Article = ({articles}) => {

    return (
        <div >
         <article className="item_article">
                <img className="item_img" src={articles.imageUrl} alt=""></img>
                 <Link className="article_header_a" to={`/articles/${articles.id}`}>
                    <h2 className="article_header" >{articles.title}</h2>
                </Link>
            </article>
        </div>

    )
}
export default Article
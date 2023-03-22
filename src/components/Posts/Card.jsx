import { useContext } from "react";
import { Link } from "react-router-dom";
import PostContext from "../../context/PostContext";
import { toSlug } from "../../utils/functions";
import { routes } from "../../utils/variables";

const Card = () => {
    const { post: { id, title, body } } = useContext(PostContext);
    
    return (
        <Link to={routes.postsShow(id, toSlug(title))} className='card-post'>
            <article>
                <header>
                    <h2>{title.length > 40 ? `${title.substr(0, 35)}[...]` : title}</h2>
                </header>
                <p>{body.length > 80 ? `${body.substr(0, 75)}[...]` : body}</p>
            </article>
        </Link>
    );
}

export default Card;
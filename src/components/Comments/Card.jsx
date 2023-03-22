import { useContext } from "react";
import CommentContext from "../../context/CommentContext";

const Card = () => {
    const { comment: { name, email, body } } = useContext(CommentContext);
    
    return (
        <li>
            <article className="card-comment">
                <a href={`mailto:${email}`}><address>{email}</address></a>
                <h3>{name}</h3>
                <p>{body}</p>
            </article>
        </li>
    );
}

export default Card;
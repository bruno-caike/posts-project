import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { toSlug } from "../../utils/functions";
import { routes } from "../../utils/variables";

const Card = () => {
    const { user: { id, name, username } } = useContext(UserContext);
    
    return (
        <Link to={routes.usersShow(id, toSlug(name))} className='card-user'>
            <article>
                <strong># {id}</strong>
                <header>
                    <h2>{name.length > 40 ? `${name.substr(0, 35)}[...]` : name}</h2>
                </header>
                <p><strong>Username: </strong>{username}</p>
            </article>
        </Link>
    );
}

export default Card;
import { Link } from 'react-router-dom'
import { routes } from "../utils/variables";

const Header = () => (
    <header className="header-page">
        <div className="container">
            <ul>
                <li><Link to={routes.home}>Início</Link></li>
                <li><Link to={routes.posts}>Posts</Link></li>
                <li><Link to={routes.users}>Usuários</Link></li>
            </ul>
        </div>
    </header>
);

export default Header;
import { useEffect, useState } from 'react';
import Base from '../components/Base';
import Loading from '../components/Loading';
import Card from '../components/Posts/Card';
import PostContext from '../context/PostContext';
import { generateRandom } from '../utils/functions';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const dataPosts = JSON.parse(localStorage.getItem("last_posts"));
            console.log(dataPosts)
            setPosts(dataPosts);
            setLoading(false);
        }
        fetchPosts();
    }, []);
    return (
        <Base>
            <section className="s-list-posts">
                    <div className="container">
                        <header>
                            <h1>Listagem do ultimos posts acessados</h1>
                        </header>
                        {loading ? <Loading /> :
                            (posts != null && posts.length > 0 ? 
                                <nav>
                                    <ul>
                                        {posts.map(post => {
                                            return (
                                                <li key={generateRandom()}>
                                                    <PostContext.Provider value={{ post }}>
                                                        <Card />
                                                    </PostContext.Provider>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </nav> : 
                                <p>Não temos nenhum registro</p>
                            )
                        }
                    </div>
                </section>
        </Base>
    );
}

export default Home;
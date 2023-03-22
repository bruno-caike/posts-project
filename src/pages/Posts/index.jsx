import { useEffect, useState } from 'react';
import PostContext from '../../context/PostContext';

import Base from '../../components/Base';
import Loading from '../../components/Loading';
import Card from '../../components/Posts/Card';

import { generateRandom } from '../../utils/functions';
import { url } from '../../utils/variables';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const data = await fetch (`${url}/posts`, {'method': 'GET',"headers": {}})
            const dataPosts = await data.json();
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
                        <h2>Listagem de posts</h2>
                    </header>
                    {loading ? <Loading /> :
                        (posts.length > 0 ? 
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

export default Posts;
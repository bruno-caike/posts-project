import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Base from '../../components/Base';
import Card from '../../components/Comments/Card';
import Loading from '../../components/Loading';

import CommentContext from '../../context/CommentContext';

import { generateRandom, toSlug } from '../../utils/functions';
import { routes, url } from '../../utils/variables';

const Post = () => {
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState(null);
    const [loading, setLoading] = useState(true);
    const [exist, setExist] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const intId = parseInt(id);
        if (intId != 0 && !isNaN(intId)) {
            const fetchs = async () => {
                const dataPost = await fetch (`${url}/posts/${intId}`, {'method': 'GET',"headers": {}})
                const valuePost = await dataPost.json();
                setPost(valuePost);
                if (valuePost != {}) {
                    const dataUser = await fetch (`${url}/users/${valuePost.userId}`, {'method': 'GET',"headers": {}})
                    const valueUser = await dataUser.json();
                    const dataComments = await fetch (`${url}/posts/${valuePost.id}/comments`, {'method': 'GET',"headers": {}})
                    const valueComments = await dataComments.json();
                    setUser(valueUser);
                    setComments(valueComments);
                    setLoading(false);
                } else {
                    setExist(false);
                }
            }
            fetchs();
        } else {
            setExist(false)
        }
    }, []);

    return (
        <Base>
            <section className="s-show-post">
                <div className="container">
                    {!exist ? 
                        <div className='not-exist'>
                            <p>Post não encontrado</p>
                            <Link to={routes.posts}>Voltar para Listagem</Link>
                        </div> : (loading ? <Loading /> : 
                        <>
                            <header>
                                <h1>{post.title}</h1>
                                <p>{post.body}</p>
                            </header>
                            {user &&
                                <article>
                                    <header>
                                        <h2>Usuário</h2>
                                        <p>{user.name}</p>
                                    </header>
                                    <Link to={routes.usersShow(user.id, toSlug(user.name))}>Ver usuário</Link>
                                </article>
                            }
                            {comments && comments.length > 0 &&
                                <ul>
                                    <h2>Comentários</h2>
                                    <div>
                                        {comments.map(comment => {
                                            return (
                                                <CommentContext.Provider key={generateRandom()} value={{ comment }}>
                                                    <Card />
                                                </CommentContext.Provider>
                                            );
                                        })}
                                    </div>
                                </ul>
                            }
                        </>
                    )}
                </div>
            </section>
        </Base>
    );
}

export default Post;
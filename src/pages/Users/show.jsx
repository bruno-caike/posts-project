import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Base from '../../components/Base';
import Loading from '../../components/Loading';
import { url } from '../../utils/variables';

const User = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [exist, setExist] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const intId = parseInt(id);
        if (intId != 0 && !isNaN(intId)) {
            const fetchs = async () => {
                const dataUser = await fetch (`${url}/users/${intId}`, {'method': 'GET',"headers": {}})
                const valueUser = await dataUser.json();
                setUser(valueUser);
                setLoading(false);
                if (valueUser == {}) {
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
            <section className="s-show-users">
                <div className="container">
                    {!exist ? 
                        <div className='not-exist'>
                            <p>Post não encontrado</p>
                            <Link to={routes.posts}>Voltar para Listagem</Link>
                        </div> : (loading ? <Loading /> : 
                        <>
                            <header>
                                <h1>#{user.id} - {user.name}</h1>
                            </header>
                            <ul>
                                <li>
                                    <strong>Username</strong>
                                    <p>{user.username}</p>
                                </li>
                                <li>
                                    <strong>E-mail</strong>
                                    <p><a href={`mailto:${user.email}`}>{user.email}</a></p>
                                </li>
                                <li>
                                    <strong>Telefone</strong>
                                    <p><a href={`tel:${user.phone}`}>{user.phone}</a></p>
                                </li>
                                <li>
                                    <strong>Site</strong>
                                    <p><a href={user.website}>Ver site</a></p>
                                </li>
                            </ul>
                            {user.address &&
                                <div>
                                    <p>Endereço</p>
                                    <ul>
                                        <li>
                                            <strong>Rua</strong>
                                            <p>{user.address.street}</p>
                                        </li>
                                        <li>
                                            <strong>Complemento</strong>
                                            <p>{user.address.suite}</p>
                                        </li>
                                        <li>
                                            <strong>Cidade</strong>
                                            <p>{user.address.city}</p>
                                        </li>
                                        <li>
                                            <strong>CEP</strong>
                                            <p>{user.address.zipcode}</p>
                                        </li>
                                    </ul>
                                </div>
                            }
                            {user.company &&
                                <div>
                                    <p>Empresa</p>
                                    <ul>
                                        <li>
                                            <strong>Razão social</strong>
                                            <p>{user.company.name}</p>
                                        </li>
                                        <li>
                                            <strong>Frases de efeito</strong>
                                            <p>{user.company.catchPhrase}</p>
                                        </li>
                                        <li>
                                            <strong>Especializadades</strong>
                                            <p>{user.company.bs}</p>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </>
                    )}
                </div>
            </section>
        </Base>
    );
} 

export default User;
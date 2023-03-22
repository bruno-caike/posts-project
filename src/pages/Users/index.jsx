import { useEffect, useState } from 'react';

import UserContext from '../../context/UserContext';

import Base from '../../components/Base';
import Card from '../../components/Users/Card';
import Loading from '../../components/Loading';
import { url } from '../../utils/variables';
import { generateRandom } from '../../utils/functions';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await fetch (`${url}/users`, {'method': 'GET',"headers": {}})
            const dataUsers= await data.json();
            setUsers(dataUsers);
            setLoading(false);
        }
        fetchUsers();
    }, []);
    return (
        <Base>
            <section className="s-list-users">
                <div className="container">
                    <header>
                        <h1>Listagem de usuários</h1>
                    </header>
                    {loading ? <Loading /> :
                        (users.length > 0 ? 
                            <nav>
                                <ul>
                                    {users.map(user => {
                                        return (
                                            <li key={generateRandom()}>
                                                <UserContext.Provider value={{ user }}>
                                                    <Card />
                                                </UserContext.Provider>
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

export default Users;
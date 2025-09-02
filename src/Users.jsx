import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const Users = useLoaderData();
    return (
        <div>
            <h2>{Users.length}</h2>
            <div>
                {/* {
                    Users.map(user => <p key={user._id}>{user.name} : {user.email}</p>)
                } */}
                <div>
                    {Users.map(user => (
                        <div key={user._id}>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Users;
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadUser = useLoaderData();

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };
        console.log(updatedUser);

        // send data to the server
        fetch(`http://localhost:5000/users/${loadUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('User updated successfully');
                    event.target.reset();
                }
            });
    }

    return (
        <div>
            <h3>Update information of {loadUser.name}</h3>
            <form onSubmit={handleUpdate}> 
                <input type="text" name="name" defaultValue={loadUser?.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={loadUser?.email} id="" />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;
import React from 'react'
import './App.css'

function App() {

  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };
    console.log(user);

    // send data to the server
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // event.target.reset();
        if(data.insertedId){
          alert('User added successfully')
          event.target.reset();
        }
      })    
  }
  

  return (
    <>
      
      <h1>Simple Crud</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Add User" />
          

      </form>
      
      
    </>
  )
}

export default App

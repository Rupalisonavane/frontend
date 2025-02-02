import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './signup.css';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate= useNavigate();
  const [formData,setFormData]= useState({
    email:'',
    name:'',
    password:''
  })
  const handleInputChange= (event)=>{
  const {name,value}=event.target;
  setFormData({
    ...formData,
    [name]:value
  })
  
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:5000/user/register", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      console.log(result);
      navigate("/login");
    } catch (error) {
      console.log("Problem in fetching data", error.message);
    } finally {
      setFormData({
        email: '',
        name: '',
        password: ''
      });
    }
  };
  return (
    <div className='center-form'>

    <Form  onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text" name="name" placeholder="Enter Name" value={formData.name} 
       onChange={handleInputChange}
      />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email"
       name="email" 
      value={formData.email}
       placeholder="Enter email"
      onChange={handleInputChange} />
      <Form.Text className="text-muted">
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" name="password" 
      value={formData.password}
       placeholder="password"  
       onChange={handleInputChange} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="dark" type="submit">
      SignUp
    </Button>
  </Form>
  </div>
  )
}

export default Logout

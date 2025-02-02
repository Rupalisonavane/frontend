import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import "./login.css";
function Login() {
  const navigate= useNavigate();
  const [formData,setFormData]= useState({
    email:'',
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
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST", 
        headers: {

          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
      localStorage.setItem("token",result.token);
      console.log(result);
      navigate("/dashboard");
    } catch (error) {
      console.log("Problem in fetching data", error.message);
    } finally {
      setFormData({
        email: '',
        password: ''
      });
    }
  };
  return (
<div className='center-form'>
<Form  onSubmit={handleSubmit}>


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
      Login
    </Button>
  </Form>
  </div>
  )
}

export default Login

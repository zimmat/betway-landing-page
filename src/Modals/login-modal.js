import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [errorMessage, setError] = useState('');

  const url = 'https://fn-uks-dev-eng-fe-mock-svc.azurewebsites.net/api/sign-in';

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!email || !email.includes('@')) {
        setError('Please enter a valid email address');
        return;
      }
      if (!password || password.length < 8) {
        setError('Please enter a password with at least 8 characters');
        return;
      }
      const body = JSON.stringify({ email, password });
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
      });
      if (!response.ok) {
        throw new Error('Sign-in request failed');
      }
      const data = await response.json();
      setShow(false);
      return data;
    } catch (ex) {
      setError('Login failed. Please try again.');
      console.log('Login Failed', ex.message);
    }
  };

  return (
        <>
          <Button variant="primary" onClick={handleShow}>
            Login
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h4>New Customer? <a href='#' style={{color: "#4CAF50 !important"}}>Register here</a></h4>
            <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-group mb-3">
                <input  className="form-control" type="password" id="password" name="password" minlength="8" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSubmit}>
                Login
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default LoginModal;
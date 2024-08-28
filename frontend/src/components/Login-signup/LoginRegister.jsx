
// perfect code fix it
import React, { useState, useContext } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from './LoginRegister.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Homepage/Navbar";
import { UserContext } from '../pages/User-Page/UserContext';

function LoginRegister() {
    const [registerForm, setRegisterForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''
    });

    const [registerMessage, setRegisterMessage] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const [registerMessageColor, setRegisterMessageColor] = useState('');
    const [loginMessageColor, setLoginMessageColor] = useState('');

    const { setUser } = useContext(UserContext); // Get setUser from context
    const navigate = useNavigate();

    const handleRegisterChange = (e) => {
        setRegisterForm({
            ...registerForm,
            [e.target.name]: e.target.value
        });
    };

    const handleLoginChange = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 6;
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = registerForm;

        if (name.trim() === '') {
            setRegisterMessage('Please fill in the name');
            setRegisterMessageColor('red');
        } else if (!validateEmail(email)) {
            setRegisterMessage('Invalid email address');
            setRegisterMessageColor('red');
        } else if (!validatePassword(password)) {
            setRegisterMessage('Password must be at least 6 characters');
            setRegisterMessageColor('red');
        } else if (password !== confirmPassword) {
            setRegisterMessage('Passwords do not match');
            setRegisterMessageColor('red');
        } else {
            try {
                const response = await axios.post("http://localhost:8080/api/users/register", {
                    name,
                    email,
                    password
                });
                localStorage.setItem('user', JSON.stringify(response.data));
                setRegisterMessage('Registration successful!');
                setRegisterMessageColor('green');
            } catch (error) {
                console.error('Error during registration:', error.response ? error.response.data : error.message);
                setRegisterMessage('Registration failed. Please try again.');
                setRegisterMessageColor('red');
            }
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = loginForm;

        if (!validateEmail(email)) {
            setLoginMessage('Invalid email address');
            setLoginMessageColor('red');
        } else if (!validatePassword(password)) {
            setLoginMessage('Password must be at least 6 characters');
            setLoginMessageColor('red');
        } else {
            try {
                const response = await axios.get(`http://localhost:8080/api/users/login-success`, {
                    params: {
                        email: email,
                        password: password
                    }
                });

                // const user = response.data;
                const { message, user } = response.data; 
                if (user) {
                    localStorage.setItem('user', JSON.stringify(user));
                    setLoginMessage('Login successful!');
                    setLoginMessage(message);
                    setLoginMessageColor('green');

                    setUser(user); // Set the user data in context
                    
                    setTimeout(() => {
                        if (email.endsWith('@eventspot.com')) {
                            navigate('/admin-pages');
                        } else {
                            navigate('/user-page');
                        }
                    }, 3000);
                   
                    // navigate('/profile');
                    // if (email.endsWith('@eventspot.com')) {
                    //     navigate('/admin-pages');
                    // } else {
                    //     navigate('/user-page');
                    // }
                } else {
                    setLoginMessage('Invalid email or password');
                    setLoginMessageColor('red');
                }
            } catch (error) {
                setLoginMessage('Login failed. Please try again.');
                setLoginMessageColor('red');
            }
        }
    };

    const SwitchContent = (e) => {
        const content = document.getElementById('content');
        if (e.target.id === 'register') {
            content.classList.add('active');
        } else if (e.target.id === 'login') {
            content.classList.remove('active');
        }
    };

    return (
        <div>
            <Navbar />
            <div className={styles.content} id='whole'>
                <div className='content justify-content-center align-items-center d-flex shadow-lg' id='content'>
                    <div className='col-md-6 d-flex justify-content-center'>
                        <form onSubmit={handleRegisterSubmit}>
                            <div className='header-text mb-4'>
                                <h1>Create Account</h1>
                            </div>
                            <div className='input-group mb-3'>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    name='name'
                                    className='form-control form-control-lg bg-light fs-6'
                                    value={registerForm.name}
                                    onChange={handleRegisterChange}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    className='form-control form-control-lg bg-light fs-6'
                                    value={registerForm.email}
                                    onChange={handleRegisterChange}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    className='form-control form-control-lg bg-light fs-6'
                                    value={registerForm.password}
                                    onChange={handleRegisterChange}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <input
                                    type='password'
                                    placeholder='Confirm Password'
                                    name='confirmPassword'
                                    className='form-control form-control-lg bg-light fs-6'
                                    value={registerForm.confirmPassword}
                                    onChange={handleRegisterChange}
                                />
                            </div>
                            {registerMessage && (
                                <div className={`alert ${registerMessageColor === 'red' ? 'alert-danger' : 'alert-success'}`}>
                                    {registerMessage}
                                </div>
                            )}
                            <div className='input-group mb-3 justify-content-center'>
                                <button className='btn text-white w-50 fs-6'>REGISTER</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-6 right-box'>
                        <form onSubmit={handleLoginSubmit}>
                            <div className='header-text mb-4'>
                                <h1>Sign In</h1>
                            </div>
                            <div className='input-group mb-3'>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    name='email'
                                    className='form-control form-control-lg bg-light fs-6'
                                    value={loginForm.email}
                                    onChange={handleLoginChange}
                                />
                            </div>
                            <div className='input-group mb-3'>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    className='form-control form-control-lg bg-light fs-6'
                                    value={loginForm.password}
                                    onChange={handleLoginChange}
                                />
                            </div>
                            <div className='input-group mb-5 d-flex justify-content-between'>
                                <div className='form-check'>
                                    <input type='checkbox' className='form-check-input' />
                                    <label htmlFor='formcheck' className='form-check-label text-secondary'>
                                        <small>Remember Me</small>
                                    </label>
                                </div>
                                <div className='forgot'>
                                    <small>
                                        <a href='#'>Forgot password?</a>
                                    </small>
                                </div>
                            </div>
                            {loginMessage && (
                                <div className={`alert ${loginMessageColor === 'red' ? 'alert-danger' : 'alert-success'}`}>
                                    {loginMessage}
                                </div>
                            )}
                            <div className='input-group mb-3 justify-content-center'>
                                <button className='btn text-white w-50 fs-6'>Login</button>
                            </div>
                        </form>
                    </div>
                    <div className='switch-content'>
                        <div className='switch'>
                            <div className='switch-panel switch-left'>
                                <h1>Hello, Again</h1>
                                <p>We are happy to see you back</p>
                                <button className='hidden btn border-white text-white w-50 fs-6' id='login' onClick={SwitchContent}>
                                    Login
                                </button>
                            </div>
                            <div className='switch-panel switch-right'>
                                <h1>Welcome</h1>
                                <p>Join and book halls for events, meetings, or parties</p>
                                <button className='hidden btn border-white text-white w-50 fs-6' id='register' onClick={SwitchContent}>
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;


// correct code
// import React, { useState } from 'react';
// import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from './LoginRegister.css';
// import { useNavigate } from 'react-router-dom';
// import Navbar from "../Homepage/Navbar";

// function LoginRegister() {
//     const [registerForm, setRegisterForm] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const [loginForm, setLoginForm] = useState({
//         email: '',
//         password: ''
//     });

//     const [registerMessage, setRegisterMessage] = useState('');
//     const [loginMessage, setLoginMessage] = useState('');
//     const [registerMessageColor, setRegisterMessageColor] = useState('');
//     const [loginMessageColor, setLoginMessageColor] = useState('');

//     const navigate = useNavigate();

//     const handleRegisterChange = (e) => {
//         setRegisterForm({
//             ...registerForm,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleLoginChange = (e) => {
//         setLoginForm({
//             ...loginForm,
//             [e.target.name]: e.target.value
//         });
//     };

//     const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const validatePassword = (password) => {
//         return password.length >= 6;
//     };

//     const handleRegisterSubmit = async (e) => {
//         e.preventDefault();
//         const { name, email, password, confirmPassword } = registerForm;

//         if (name.trim() === '') {
//             setRegisterMessage('Please fill in the name');
//             setRegisterMessageColor('red');
//         } else if (!validateEmail(email)) {
//             setRegisterMessage('Invalid email address');
//             setRegisterMessageColor('red');
//         } else if (!validatePassword(password)) {
//             setRegisterMessage('Password must be at least 6 characters');
//             setRegisterMessageColor('red');
//         } else if (password !== confirmPassword) {
//             setRegisterMessage('Passwords do not match');
//             setRegisterMessageColor('red');
//         } else {
//             try {
//                 const response = await axios.post("http://localhost:8080/api/users/register", {
//                 // const response = await axios.post("http://localhost:3001/posts", {
//                     name,
//                     email,
//                     password
//                 });
//                 localStorage.setItem('user', JSON.stringify(response.data));
//                 setRegisterMessage('Registration successful!');
//                 setRegisterMessageColor('green');
//             } catch (error) {
//                 console.error('Error during registration:', error.response ? error.response.data : error.message);
//                 setRegisterMessage('Registration failed. Please try again.');
//                 setRegisterMessageColor('red');
//             }
//         }
//     };

//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();
//         const { email, password } = loginForm;

//         if (!validateEmail(email)) {
//             setLoginMessage('Invalid email address');
//             setLoginMessageColor('red');
//         } else if (!validatePassword(password)) {
//             setLoginMessage('Password must be at least 6 characters');
//             setLoginMessageColor('red');
//         } else {
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/users/login`, {
//                     params: {
//                         email: email,
//                         password: password
//                     }
//                 });
//                 // const user = response.data.find(
//                 //     (user) => user.email === email && user.password === password
//                 // );
//                 const user = response.data;
//                 if (user) {
//                     localStorage.setItem('user', JSON.stringify(user));
//                     setLoginMessage('Login successful!');
//                     setLoginMessageColor('green');

//                     if (email.endsWith('@eventspot.com')) {
//                         navigate('/admin-pages');
//                     } else {
//                         navigate('/user-page');
//                     }
//                 } else {
//                     setLoginMessage('Invalid email or password');
//                     setLoginMessageColor('red');
//                 }
//             } catch (error) {
//                 setLoginMessage('Login failed. Please try again.');
//                 setLoginMessageColor('red');
//             }
//         }
//     };

//     const SwitchContent = (e) => {
//         const content = document.getElementById('content');
//         if (e.target.id === 'register') {
//             content.classList.add('active');
//         } else if (e.target.id === 'login') {
//             content.classList.remove('active');
//         }
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className={styles.content} id='whole'>
//                 <div className='content justify-content-center align-items-center d-flex shadow-lg' id='content'>
//                     <div className='col-md-6 d-flex justify-content-center'>
//                         <form onSubmit={handleRegisterSubmit}>
//                             <div className='header-text mb-4'>
//                                 <h1>Create Account</h1>
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <input
//                                     type='text'
//                                     placeholder='Name'
//                                     name='name'
//                                     className='form-control form-control-lg bg-light fs-6'
//                                     value={registerForm.name}
//                                     onChange={handleRegisterChange}
//                                 />
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <input
//                                     type='email'
//                                     placeholder='Email'
//                                     name='email'
//                                     className='form-control form-control-lg bg-light fs-6'
//                                     value={registerForm.email}
//                                     onChange={handleRegisterChange}
//                                 />
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <input
//                                     type='password'
//                                     placeholder='Password'
//                                     name='password'
//                                     className='form-control form-control-lg bg-light fs-6'
//                                     value={registerForm.password}
//                                     onChange={handleRegisterChange}
//                                 />
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <input
//                                     type='password'
//                                     placeholder='Confirm Password'
//                                     name='confirmPassword'
//                                     className='form-control form-control-lg bg-light fs-6'
//                                     value={registerForm.confirmPassword}
//                                     onChange={handleRegisterChange}
//                                 />
//                             </div>
//                             {registerMessage && (
//                                 <div className={`alert ${registerMessageColor === 'red' ? 'alert-danger' : 'alert-success'}`}>
//                                     {registerMessage}
//                                 </div>
//                             )}
//                             <div className='input-group mb-3 justify-content-center'>
//                                 <button className='btn text-white w-50 fs-6'>REGISTER</button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className='col-md-6 right-box'>
//                         <form onSubmit={handleLoginSubmit}>
//                             <div className='header-text mb-4'>
//                                 <h1>Sign In</h1>
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <input
//                                     type='email'
//                                     placeholder='Email'
//                                     name='email'
//                                     className='form-control form-control-lg bg-light fs-6'
//                                     value={loginForm.email}
//                                     onChange={handleLoginChange}
//                                 />
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <input
//                                     type='password'
//                                     placeholder='Password'
//                                     name='password'
//                                     className='form-control form-control-lg bg-light fs-6'
//                                     value={loginForm.password}
//                                     onChange={handleLoginChange}
//                                 />
//                             </div>
//                             <div className='input-group mb-5 d-flex justify-content-between'>
//                                 <div className='form-check'>
//                                     <input type='checkbox' className='form-check-input' />
//                                     <label htmlFor='formcheck' className='form-check-label text-secondary'>
//                                         <small>Remember Me</small>
//                                     </label>
//                                 </div>
//                                 <div className='forgot'>
//                                     <small>
//                                         <a href='#'>Forgot password?</a>
//                                     </small>
//                                 </div>
//                             </div>
//                             {loginMessage && (
//                                 <div className={`alert ${loginMessageColor === 'red' ? 'alert-danger' : 'alert-success'}`}>
//                                     {loginMessage}
//                                 </div>
//                             )}
//                             <div className='input-group mb-3 justify-content-center'>
//                                 <button className='btn text-white w-50 fs-6'>Login</button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className='switch-content'>
//                         <div className='switch'>
//                             <div className='switch-panel switch-left'>
//                                 <h1>Hello, Again</h1>
//                                 <p>We are happy to see you back</p>
//                                 <button className='hidden btn border-white text-white w-50 fs-6' id='login' onClick={SwitchContent}>
//                                     Login
//                                 </button>
//                             </div>
//                             <div className='switch-panel switch-right'>
//                                 <h1>Welcome</h1>
//                                 <p>Join and book halls for events, meetings, or parties</p>
//                                 <button className='hidden btn border-white text-white w-50 fs-6' id='register' onClick={SwitchContent}>
//                                     Register
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginRegister;


// Here it navigates to user and then goes to admin.. 

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from './LoginRegister.css';
// import { useNavigate } from 'react-router-dom';
// import Navbar from "../Homepage/Navbar";

// function LoginRegister() {
//     const [registerForm, setRegisterForm] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const [loginForm, setLoginForm] = useState({
//         email: '',
//         password: ''
//     });

//     const [registerMessage, setRegisterMessage] = useState('');
//     const [loginMessage, setLoginMessage] = useState('');
//     const [registerMessageColor, setRegisterMessageColor] = useState('');
//     const [loginMessageColor, setLoginMessageColor] = useState('');

//     const handleRegisterChange = (e) => {
//         setRegisterForm({
//             ...registerForm,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleLoginChange = (e) => {
//         setLoginForm({
//             ...loginForm,
//             [e.target.name]: e.target.value
//         });
//     };

//     const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const validatePassword = (password) => {
//         return password.length >= 6;
//     };

//     const handleRegisterSubmit = async (e) => {
//         e.preventDefault();
//         const { name, email, password, confirmPassword } = registerForm;

//         if (name.trim() === '') {
//             setRegisterMessage('Please fill in the name');
//             setRegisterMessageColor('red');
//         } else if (!validateEmail(email)) {
//             setRegisterMessage('Invalid email address');
//             setRegisterMessageColor('red');
//         } else if (!validatePassword(password)) {
//             setRegisterMessage('Password must be at least 6 characters');
//             setRegisterMessageColor('red');
//         } else if (password !== confirmPassword) {
//             setRegisterMessage('Passwords do not match');
//             setRegisterMessageColor('red');
//         } else {
//             try {
//                 const response = await axios.post("http://localhost:3001/posts", {
//                     name,
//                     email,
//                     password
//                 });
//                 localStorage.setItem('user', JSON.stringify(response.data));
//                 setRegisterMessage('Registration successful!');
//                 setRegisterMessageColor('green');
//             } catch (error) {
//                 setRegisterMessage('Registration failed. Please try again.');
//                 setRegisterMessageColor('red');
//             }
//         }
//     };

//     const handleLoginSubmit = async (e) => {
//         e.preventDefault();
//         const { email, password } = loginForm;

//         if (!validateEmail(email)) {
//             setLoginMessage('Invalid email address');
//             setLoginMessageColor('red');
//         } else if (!validatePassword(password)) {
//             setLoginMessage('Password must be at least 6 characters');
//             setLoginMessageColor('red');
//         } else {
//             try {
//                 const response = await axios.get("http://localhost:3001/posts");
//                 const user = response.data.find(
//                     (user) => user.email === email && user.password === password
//                 );

//                 if (user) {
//                     localStorage.setItem('user', JSON.stringify(response.data[0]));
//                     setLoginMessage('Login successful!');
//                     setLoginMessageColor('green');
//                     navigate('/user-page');
//                     setTimeout(() => {
//                         if (email.endsWith('@eventspot.com')) {
//                             navigate('/admin-pages');
//                         } else {
//                             navigate('/user-page');
//                         }
//                     }, 2000);
//                 } else {
//                     setLoginMessage('Invalid email or password');
//                     setLoginMessageColor('red');
//                 }
//             } catch (error) {
//                 setLoginMessage('Login failed. Please try again.');
//                 setLoginMessageColor('red');
//             }
//         }
//     };

//     const navigate = useNavigate();

//     useEffect(() => {
//         let timer;
//         if (loginMessageColor === 'green') {
//             timer = setTimeout(() => {
//                 navigate('/user-page');
//             }, 3000);
//         }
//         return () => clearTimeout(timer);
//     }, [registerMessageColor, loginMessageColor, navigate]);

//     function SwitchContent() {
//         const content = document.getElementById('content');
//         const registerBtn = document.getElementById('register');
//         const loginBtn = document.getElementById('login');

//         registerBtn.addEventListener('click', () => {
//             content.classList.add('active');
//         });

//         loginBtn.addEventListener('click', () => {
//             content.classList.remove('active');
//         });
//     }

//     return (
//         <div>
//             <Navbar />
//             <div className={styles.content} id='whole'>
//                 <div className='content justify-content-center align-items-center d-flex shadow-lg' id='content'>
//                     <div className='col-md-6 d-flex justify-content-center'>
//                         <form onSubmit={handleRegisterSubmit}>
//                             <div className='header-text mb-4'>
//                                 <h1>Create Account</h1>
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <input
//                                     type='text'
//                                     placeholder='Name'
//                                     name='name'
//                                     className='form-control form-control-lg bg-light fs-6'
//                                     value={registerForm.name}
//                                     onChange={handleRegisterChange}
//                                 />
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <input
//                                     type='email'
//                                     placeholder='Email'
//                                     name='email'
//                                     className='form-control form-control-lg bg-light fs-6'
//                                     value={registerForm.email}
//                                     onChange={handleRegisterChange}
//                                 />
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <input
//                                     type='password'
//                                     placeholder='Password'
//                                     name='password'
//                                     className='form-control form-control-lg bg-light fs-6'
//                                     value={registerForm.password}
//                                     onChange={handleRegisterChange}
//                                 />
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <input
//                                     type='password'
//                                     placeholder='Confirm Password'
//                                     name='confirmPassword'
//                                     className='form-control form-control-lg bg-light fs-6'
//                                     value={registerForm.confirmPassword}
//                                     onChange={handleRegisterChange}
//                                 />
//                             </div>
//                             {registerMessage && (
//                                 <div className={`alert ${registerMessageColor === 'red' ? 'alert-danger' : 'alert-success'}`}>
//                                     {registerMessage}
//                                 </div>
//                             )}
//                             <div className='input-group mb-3 justify-content-center'>
//                                 <button className='btn text-white w-50 fs-6'>REGISTER</button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className='col-md-6 right-box'>
//                         <form onSubmit={handleLoginSubmit}>
//                             <div className='header-text mb-4'>
//                                 <h1>Sign In</h1>
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <input
//                                     type='email'
//                                     placeholder='Email'
//                                     name='email'
//                                     className='form-control form-control-lg bg-light fs-6'
//                                     value={loginForm.email}
//                                     onChange={handleLoginChange}
//                                 />
//                             </div>
//                             <div className='input-group mb-3'>
//                                 <input
//                                     type='password'
//                                     placeholder='Password'
//                                     name='password'
//                                     className='form-control form-control-lg bg-light fs-6'
//                                     value={loginForm.password}
//                                     onChange={handleLoginChange}
//                                 />
//                             </div>
//                             <div className='input-group mb-5 d-flex justify-content-between'>
//                                 <div className='form-check'>
//                                     <input type='checkbox' className='form-check-input' />
//                                     <label htmlFor='formcheck' className='form-check-label text-secondary'>
//                                         <small>Remember Me</small>
//                                     </label>
//                                 </div>
//                                 <div className='forgot'>
//                                     <small>
//                                         <a href='#'>Forgot password?</a>
//                                     </small>
//                                 </div>
//                             </div>
//                             {loginMessage && (
//                                 <div className={`alert ${loginMessageColor === 'red' ? 'alert-danger' : 'alert-success'}`}>
//                                     {loginMessage}
//                                 </div>
//                             )}
//                             <div className='input-group mb-3 justify-content-center'>
//                                 <button className='btn text-white w-50 fs-6'>Login</button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className='switch-content'>
//                         <div className='switch'>
//                             <div className='switch-panel switch-left'>
//                                 <h1>Hello, Again</h1>
//                                 <p>We are happy to see you back</p>
//                                 <button className='hidden btn border-white text-white w-50 fs-6' id='login' onClick={SwitchContent}>
//                                     Login
//                                 </button>
//                             </div>
//                             <div className='switch-panel switch-right'>
//                                 <h1>Welcome</h1>
//                                 <p>Join and book halls for events, meetings, or parties</p>
//                                 <button className='hidden btn border-white text-white w-50 fs-6' id='register' onClick={SwitchContent}>
//                                     Register
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default LoginRegister;


// // validation
// import React, { useState, useEffect } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from  './LoginRegister.css';
// import { useNavigate } from 'react-router-dom';
// import Navbar from "../Homepage/Navbar";

// function LoginRegister() {
//     const [registerForm, setRegisterForm] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const [loginForm, setLoginForm] = useState({
//         email: '',
//         password: ''
//     });

//     const [registerMessage, setRegisterMessage] = useState('');
//     const [loginMessage, setLoginMessage] = useState('');
//     const [registerMessageColor, setRegisterMessageColor] = useState(''); // New state for message color
//     const [loginMessageColor, setLoginMessageColor] = useState(''); // New state for message color

//     const handleRegisterChange = (e) => {
//         setRegisterForm({
//             ...registerForm,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleLoginChange = (e) => {
//         setLoginForm({
//             ...loginForm,
//             [e.target.name]: e.target.value
//         });
//     };

//     const validateEmail = (email) => {
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     };

//     const validatePassword = (password) => {
//         return password.length >= 6; // Example validation, can be adjusted
//     };

//     const handleRegisterSubmit = (e) => {
//         e.preventDefault();
//         const { name, email, password, confirmPassword } = registerForm;

//         if (name.trim() === '') {
//             setRegisterMessage('Please fill in the name');
//             setRegisterMessageColor('red');
//         } else if (!validateEmail(email)) {
//             setRegisterMessage('Invalid email address');
//             setRegisterMessageColor('red');
//         } else if (!validatePassword(password)) {
//             setRegisterMessage('Password must be at least 6 characters');
//             setRegisterMessageColor('red');
//         } else if (password !== confirmPassword) {
//             setRegisterMessage('Passwords do not match');
//             setRegisterMessageColor('red');
//         } else {
//             setRegisterMessage('Registration successful!');
//             setRegisterMessageColor('green');
//             // Handle successful registration (e.g., send data to backend)
//         }
//     };

//     const handleLoginSubmit = (e) => {
//         e.preventDefault();
//         const { email, password } = loginForm;

//         if (!validateEmail(email) && !validatePassword(password)) {
//             setLoginMessage('Invalid input format: both email and password are incorrect');
//             setLoginMessageColor('red');
//         } else if (!validateEmail(email)) {
//             setLoginMessage('Invalid email address');
//             setLoginMessageColor('red');
//         } else if (!validatePassword(password)) {
//             setLoginMessage('Password must be at least 6 characters');
//             setLoginMessageColor('red');
//         } else {
//             setLoginMessage('Login successful!');
//             setLoginMessageColor('green');
//             // Handle successful login (e.g., send data to backend)
//         }


//         if (validateEmail(email) && validatePassword(password)) {
//             if (email.endsWith('@eventspot.com')) {
//                 setLoginMessage('Login successful! Redirecting to admin page...');
//                 setLoginMessageColor('green');
//                 setTimeout(() => {
//                     navigate('/admin-pages');
//                 }, 4000);
//             } else {
//                 setLoginMessage('Login successful!');
//                 setLoginMessageColor('green');
//                 setTimeout(() => {
//                     navigate('/user-page');
//                 }, 4000);
//             }
//         }

//     };

//     const navigate = useNavigate(); // For navigation

//     useEffect(() => {
//         let timer;
//         // if (registerMessageColor === 'green' || loginMessageColor === 'green') {
//         if (loginMessageColor === 'green') {
//             timer = setTimeout(() => {
//                 navigate('/user-page'); // Replace with your target page
//             }, 3000);
//         }
//         return () => clearTimeout(timer);
//     }, [registerMessageColor, loginMessageColor, navigate]);
     

//     function SwitchContent() {
//         const content = document.getElementById('content');
//         const registerBtn = document.getElementById('register');
//         const loginBtn = document.getElementById('login');

//         registerBtn.addEventListener('click', () => {
//             content.classList.add('active');
//         });

//         loginBtn.addEventListener('click', () => {
//             content.classList.remove('active');
//         });
//     }

//     return (
//         <div>
//             <Navbar />
//         <div className={styles.content} id='whole'>
//         <div className='content justify-content-center align-items-center d-flex shadow-lg' id='content'>
//             {/* Register Form */}
//             <div className='col-md-6 d-flex justify-content-center'>
//                 <form onSubmit={handleRegisterSubmit}>
//                     <div className='header-text mb-4'>
//                         <h1>Create Account</h1>
//                     </div>
//                     <div className='input-group mb-3'>
//                         <input
//                             type='text'
//                             placeholder='Name'
//                             name='name'
//                             className='form-control form-control-lg bg-light fs-6'
//                             value={registerForm.name}
//                             onChange={handleRegisterChange}
//                         />
//                     </div>
//                     <div className='input-group mb-3'>
//                         <input
//                             // type='email'
//                             placeholder='Email'
//                             name='email'
//                             className='form-control form-control-lg bg-light fs-6'
//                             value={registerForm.email}
//                             onChange={handleRegisterChange}
//                         />
//                     </div>
//                     <div className='input-group mb-3'>
//                         <input
//                             type='password'
//                             placeholder='Password'
//                             name='password'
//                             className='form-control form-control-lg bg-light fs-6'
//                             value={registerForm.password}
//                             onChange={handleRegisterChange}
//                         />
//                     </div>
//                     <div className='input-group mb-3'>
//                         <input
//                             type='password'
//                             placeholder='Confirm Password'
//                             name='confirmPassword'
//                             className='form-control form-control-lg bg-light fs-6'
//                             value={registerForm.confirmPassword}
//                             onChange={handleRegisterChange}
//                         />
//                     </div>
//                     {registerMessage && <div className={`alert ${registerMessageColor === 'red' ? 'alert-danger' : 'alert-success'}`}>{registerMessage}</div>}
//                     <div className='input-group mb-3 justify-content-center'>
//                         <button className='btn text-white w-50 fs-6'>REGISTER</button>
//                     </div>
//                 </form>
//             </div>
//             {/* Login */}
//             <div className='col-md-6 right-box'>
//                 <form onSubmit={handleLoginSubmit}>
//                     <div className='header-text mb-4'>
//                         <h1>Sign In</h1>
//                     </div>
//                     <div className='input-group mb-3'>
//                         <input
//                             // type='email'
//                             placeholder='Email'
//                             name='email'
//                             className='form-control form-control-lg bg-light fs-6'
//                             value={loginForm.email}
//                             onChange={handleLoginChange}
//                         />
//                     </div>
//                     <div className='input-group mb-3'>
//                         <input
//                             type='password'
//                             placeholder='Password'
//                             name='password'
//                             className='form-control form-control-lg bg-light fs-6'
//                             value={loginForm.password}
//                             onChange={handleLoginChange}
//                         />
//                     </div>
//                     <div className='input-group mb-5 d-flex justify-content-between'>
//                         <div className='form-check'>
//                             <input type='checkbox' className='form-check-input' />
//                             <label htmlFor='formcheck' className='form-check-label text-secondary'>
//                                 <small>Remember Me</small>
//                             </label>
//                         </div>
//                         <div className='forgot'>
//                             <small>
//                                 <a href='#'>Forgot password?</a>
//                             </small>
//                         </div>
//                     </div>
//                     {loginMessage && <div className={`alert ${loginMessageColor === 'red' ? 'alert-danger' : 'alert-success'}`}>{loginMessage}</div>}
//                     <div className='input-group mb-3 justify-content-center'>
//                         <button className='btn text-white w-50 fs-6'>Login</button>
//                     </div>
//                 </form>
//             </div>

//             {/* switch Panel */}
//             <div className='switch-content'>
//                 <div className='switch'>
//                     <div className='switch-panel switch-left'>
//                         <h1>Hello, Again</h1>
//                         <p>We are happy to see you back</p>
//                         <button className='hidden btn border-white text-white w-50 fs-6' id='login' onClick={SwitchContent}>
//                             Login
//                         </button>
//                     </div>
//                     <div className='switch-panel switch-right'>
//                         <h1>Welcome</h1>
//                         <p>Join and book halls for events, meetings, or parties</p>
//                         <button className='hidden btn border-white text-white w-50 fs-6' id='register' onClick={SwitchContent}>
//                             Register
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//         </div>
//     );
// }

// export default LoginRegister;



// // Utube 

// // import React from 'react'

// // function LoginRegister() {
    
// //     function SwitchContent()
// //     {
// //         const content = document.getElementById('content');    
// //         const registerBtn = document.getElementById('register');
// //         const loginBtn = document.getElementById('login');

// //         registerBtn.addEventListener('click', ()=> {
// //             content.classList.add("active")    
// //         });

// //         loginBtn.addEventListener('click', ()=> {
// //             content.classList.remove("active")    
// //         });
// //     }
// //   return (
// //     <div className='content justify-content-center align-items-center d-flex shawdow-ig' id='content'>    
// //        {/* Register Form */}
// //         <div className='col-md-6 d-flex justify-content-center'>
// //             <form>
// //                 <div className='header-text mb-4'>
// //                     <h1>Create Account</h1>
// //                 </div>
// //                 <div className='input-group mb-3'>
// //                     <input type='text' placeholder='Name' className='form-control form-control-lg bg-lignt fs-6'></input>
// //                 </div>
// //                 <div className='input-group mb-3'>
// //                     <input type='email' placeholder='Email' className='form-control form-control-lg bg-lignt fs-6'></input>
// //                 </div>
// //                 <div className='input-group mb-3'>
// //                     <input type='password' placeholder='Password' className='form-control form-control-lg bg-lignt fs-6'></input>
// //                 </div>
// //                 <div className='input-group mb-3 justify-content-center'>
// //                   <button className='btn text-white w-50 fs-6'>REGISTER</button>
// //                 </div>
// //             </form>
// //         </div>
// //         {/* Login */}
// //         <div className='col-md-6 right-box'>
// //             <form>
// //                 <div className='header-text mb-4'>
// //                     <h1>Sign In</h1>
// //                 </div>
// //                 <div className='input-group mb-3'>
// //                     <input type='email' placeholder='Email' className='form-control form-control-lg bg-lignt fs-6'></input>
// //                 </div>
// //                 <div className='input-group mb-3'>
// //                     <input type='password' placeholder='Password' className='form-control form-control-lg bg-lignt fs-6'></input>
// //                 </div>
// //                 <div className='input-group mb-5 d-flex justify-content-between'>
// //                     <div className='form-check'>
// //                         <input type='checkbox' className='form-check-input'></input>
// //                         <label htmlFor='formcheck' className='form-check-label text-secondary'><small>Remember Me</small></label>
// //                     </div>
// //                     <div className='forgot'>
// //                         <small><a href='#'>Forgot password?</a></small>
// //                     </div>
// //                 </div>
// //                 <div className='input-group mb-3 justify-content-center'>
// //                     <button className='btn text-white w-50 fs-6'>Login</button>
// //                 </div>
// //             </form>
// //         </div>

// //         {/* switch Panel */}
// //         <div className='switch-content'>
// //             <div className='switch'>
// //                 <div className='switch-panel switch-left'>
// //                     <h1>Hello, Again</h1>
// //                     <p>We are happy to see you back</p>
// //                     <button className='hidden btn border-white text-white w-50 fs-6' id='login' onClick={SwitchContent}>Login</button>
// //                 </div>
// //                 <div className='switch-panel switch-right'>
// //                     <h1>Welcome</h1>
// //                     <p>Join and book halls for events, meetings, or parties</p>
// //                     <button className='hidden btn border-white text-white w-50 fs-6' id='register' onClick={SwitchContent}>Register</button>
// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default LoginRegister;


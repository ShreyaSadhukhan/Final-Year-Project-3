import { useState } from 'react';
import styles from './login.module.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email || !password) {
            setErrorMessage('Please fill in all fields');
            return;
        }
        // Perform login logic (e.g., API call)
        // Reset form fields and error message
        setEmail('');
        setPassword('');
        setErrorMessage('');
    };
    return (
        <div className={styles.loginContainer}>
            <button onClick={() => history.goBack()}>
                <i className="fas fa-arrow-left"></i>
            </button>
            <div className={styles.loginForm}>
                <img src={assets.triangle} alt="triangle" />
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='email'>Email</label>
                        <br />
                        <input type='email' placeholder='Enter your email' id='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                        <br />
                        <label htmlFor='password'>Password</label>
                        <br />
                        <input type='password' placeholder='**********' id='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                    <br />
                    <button className={styles.loginButton} type="submit"><Link to="/workspacePage"> Log in</Link></button>
                    <p className={styles.or}>OR</p>
                    <button className={styles.googleButton} type="button">
                        <img src={assets.googleIcon} alt="googleIcon" />
                        Sign In with Google
                    </button>
                    <p className={styles.signupText}>Don`t have an account? 
                        <button type='createnewaccount' className={styles.registerbtn}><Link to="/signup">Register now</Link></button>
                    </p>
                </form>
                <div className={styles.ellipse2}>
                    <img src={assets.ellipse2} alt="ellipse2" />
                </div>
            </div>
            <div className={styles.ellipse1}>
                <img src={assets.ellipse1} alt="ellipse1" />
            </div>
        </div>
    );
}
export default Login;
import { useState } from 'react';
import styles from './Signup.module.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';


function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }
        // Perform further validation or API calls here
        // Reset form fields
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrorMessage('');

    };
    return (
        <div className={styles.signupContainer}>
            <button onClick={() => history.goBack()}>
                <i className="fas fa-arrow-left"></i>
            </button>
            <div className={styles.signupForm}>
                <img src={assets.triangle} alt="triangle" />
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor='username'>Username</label>
                        <br />
                        <input type='text' placeholder='Enter your username' id='username' value={username} onChange={(event) => setUsername(event.target.value)} />
                        <br />
                        <label htmlFor='email'>Email</label>
                        <br />
                        <input type='email' placeholder='Enter your email' id='email' value={email} onChange={(event) => setEmail(event.target.value)} />
                        <br />
                        <label htmlFor='password'>Password</label>
                        <br />
                        <input type='password' placeholder='**********' id='password' value={password} onChange={(event) => setPassword(event.target.value)} />
                        <br />
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <br />
                        <input type='password' placeholder='**********' id='confirmPassword' value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                    </div>
                    {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
                    <br />
                    <button className={styles.signupButton} type="submit">Sign Up</button>
                    <p className={styles.or}>OR</p>
                    <button className={styles.googleButton} type="button">
                        <img src={assets.googleIcon} alt="googleIcon" />
                        Sign Up with Google
                    </button>
                    <p className={styles.loginText}>Already have an account? <button type='createaccount' className={styles.buttonLogin}><Link to="/login">Login </Link></button></p>
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
export default Signup;
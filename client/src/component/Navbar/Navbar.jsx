import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__container'>
                <div className='navbar__logo_name'>
                    <img src={assets.logo} alt="Logo" />
                    <h4>FormBot</h4>
                </div>
                <div className='navbar__menu'>
                    <button className="signin" type='submit'><Link to="/login">Sign in</Link></button>
                    <button className="create-FormBot">Create a FormBot</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
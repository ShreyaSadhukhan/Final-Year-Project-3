import './Footer.css'
import { assets } from '../../assets/assets'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src={assets.logo} alt="Logo" />
                        <h4>FormBot</h4>
                    </div>
                    <p>Made with ❤️ by Cuvette</p>
                </div>
                <div className="footer-section">
                    <h4>Product</h4>
                    <ul>
                        <li><a href="#">Status</a></li>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">Roadmap</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Community</h4>
                    <ul>
                        <li><a href="#">Discord</a></li>
                        <li><a href="#">GitHub repository</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">OSS Friends</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

import './Footer.css';
import facebookL from '../../assets/socialLogo/facebookLight.png';
import facebookD from '../../assets/socialLogo/facebookDark.png';
import instagramL from '../../assets/socialLogo/instagramLight.png';
import instagramD from '../../assets/socialLogo/instagramDark.png';
import twitterL from '../../assets/socialLogo/twitterLight.png';
import twitterD from '../../assets/socialLogo/twitterDark.png';
import youtubeL from '../../assets/socialLogo/youtubeLight.png';
import youtubeD from '../../assets/socialLogo/youtubeDark.png';

function Footer() {
    return (
        <div className="footer">
            <div className="lineUp">
                <div className="social">
                    <a href=""><img src={facebookL} alt="social network" /></a>
                    <a href=""><img src={instagramL} alt="social network" /></a>
                    <a href=""><img src={twitterL} alt="social network" /></a>
                    <a href=""><img src={youtubeL} alt="social network" /></a>
                </div>
                <div className="contact">
                    <h4>CONTACT</h4>
                    <p>Green carrier pigeon, call name: 'Sylvain-Louis'</p>
                    <p>Address: Seventh smoking tree in the Candy Forest</p>
                </div>
            </div>

            <div className="copyright">
                <p>Made with ♥ by ©MarmiPotion - 1540-1550</p>
            </div>
        </div>
    )
};

export default Footer;
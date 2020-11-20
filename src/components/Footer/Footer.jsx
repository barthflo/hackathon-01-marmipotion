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
                    <img src={facebookL} alt="social network" />
                    <img src={instagramL} alt="social network" />
                    <img src={twitterL} alt="social network" />
                    <img src={youtubeL} alt="social network" />
                </div>
                <div className="contact">
                    <p>CONTACT</p>
                    <p>Green carrier pigeon, call name: <span>'Sylvain-Louis'</span></p>
                    <p>Address: <span>Seventh smoking tree in the Candy Forest</span></p>
                </div>
            </div>

            <div className="copyright">
                <p>Made with ♥ by Marmipotion</p>
                <p>©Marmipotion - 1000-1254</p>
            </div>
        </div>
    )
};

export default Footer;
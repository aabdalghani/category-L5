
import logo1 from "../../image/logo.jpg";
import { HiArrowRightCircle } from "react-icons/hi2";
import { GrMailOption } from "react-icons/gr";
import { FaFacebook, FaFacebookMessenger,FaInstagram,FaLinkedin,FaTelegram,FaTwitter} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
              <div className='row'>
                <div className='col'>
                  <img src={logo1} className='logo'/>
                  <p>Computer Vision Platform to Improve Your Operations
Manufacture and deliver products at higher speed, without defects and at lower cost.</p>
                  </div>
                <div className='col'>
                  <h3>Office</h3>
                  <p>Nashik, Maharastra, India</p>
                  <p className='email-id'>sales@iwizdom.com</p>
                  <h4> +91 - 7972707849</h4>
                </div>
                <div className='col'>
                  <h3>Links</h3>
                  <ul>
                    <li><a href=''/>Home</li>
                    <li><a href=''/>services</li>
                    <li><a href=''/>About Us</li>
                    <li><a href=''/>Contacts</li>
                  </ul>
                </div>
                <div className='col'>
                  <h3>Newsletter</h3>
                  <form>
                    <h1 className='email'><GrMailOption style={{ height: '70px', width: '40px'}}/></h1>
                    <input type='email' placeholder="Enter your email id" required/>
                    <button type='submit'><HiArrowRightCircle style={{ height: '25px', width: '25px'}}/></button>
                  </form>
                  <div className='social-icons'>
                    <a href='' target="_blank" ><FaFacebook style={{ backgroundColor:'white', height: '40px', width: '40px', borderRadius: '30%',textAlign: 'center', lineHeight:'40px', fontSize:'20px',color:'#000',background:'#fff',marginRight:'35px'}}/></a>
                    <a href='' target="_blank"><FaFacebookMessenger style={{ backgroundColor:'white',height: '40px', width: '40px', borderRadius: '30%',textAlign: 'center', lineHeight:'40px', fontSize:'20px',color:'#000',background:'#fff',marginRight:'35px'}} /></a>
                    <a href='' target="_blank"><FaInstagram style={{ backgroundColor:'white',height: '40px', width: '40px', borderRadius: '30%',textAlign: 'center', lineHeight:'40px', fontSize:'20px',color:'#000',background:'#fff',marginRight:'35px'}} /></a>
                    <a href='' target="_blank"><FaLinkedin style={{ backgroundColor:'white',height: '40px', width: '40px', borderRadius: '30%',textAlign: 'center', lineHeight:'40px', fontSize:'20px',color:'#000',background:'#fff',marginRight:'35px'}}/></a>
                    <a href='' target="_blank"><FaTelegram style={{ backgroundColor:'white',height: '40px', width: '40px', borderRadius: '30%',textAlign: 'center', lineHeight:'40px', fontSize:'20px',color:'#000',background:'#fff',marginRight:'35px'}}/></a>
                    <a href='' target="_blank"><FaTwitter style={{ backgroundColor:'white',height: '40px', width: '40px', borderRadius: '30%',textAlign: 'center', lineHeight:'40px', fontSize:'20px',color:'#000',background:'#fff',marginRight:'35px'}}/></a>
                    
                  </div>
                </div>
              </div>
              <hr />
              <p className='copyright'>Iwizdom System Private Limit © 2023 - All Right Reserved</p>

            </footer>

  );
};

export default Footer;

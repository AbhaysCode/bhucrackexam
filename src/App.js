import './App.css';
import {BrowserRouter,Routes,Route, NavLink,Link} from "react-router-dom";
import Home from './Home.js';
import Courses from './Courses.js';
import Notes from './Notes.js';
import Corner from './Corner.js';
import ContactUs from './ContactUs.js';
import Error from './Error.js';
import LogIn from './LogIn.js';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import GoToTop from './GoToTop';


function App() {
  return (
    <BrowserRouter>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink to="/bhucrackexam" className="navbar-brand">
          <img src="https://as1.ftcdn.net/v2/jpg/02/82/78/74/1000_F_282787473_9kdsoTGduXeag6IGhSHsi2y1C7YkYsfY.jpg" width={30} height={24}/>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/bhucrackexam" className='nav-link' >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bhucrackexam/courses" className='nav-link '>
                  Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bhucrackexam/notes" className='nav-link '>
                    Notes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bhucrackexam/corner" className='nav-link '>
                    Corner
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bhucrackexam/contactus" className='nav-link '>
                    Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/bhucrackexam/login" className='nav-link '>
                    Log In
              </NavLink>
            </li>
          </ul>
</div>
      </div>  
    </nav>
      <Routes>
        <Route path='/bhucrackexam' element={<Home/>}/>
        <Route path = '/bhucrackexam/courses' element={<Courses/>}/>
        <Route path='/bhucrackexam/notes' element={<Notes/>}/>
        <Route path='/bhucrackexam/corner' element={<Corner/>}/>
        <Route path='/bhucrackexam/contactus' element={<ContactUs/>}/>
        <Route path='/bhucrackexam/login' element={<LogIn/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <div className='container-fluid bg-dark text-center p-3'>
        <a className="p-1 text-light" href="https://www.instagram.com/mahi7781/?hl=en" target='_blank'>
          <InstagramIcon className='follow'/>
        </a>
        <a className="p-1 text-light" href="https://www.linkedin.com/company/apple/" target='_blank'>
          <LinkedInIcon className='follow'/>
        </a>
        <a className="p-1 text-light" href="https://www.facebook.com/apple/" target='_blank'>
          <FacebookIcon className='follow'/>
        </a>
        <a className="p-1 text-light" href="https://twitter.com/apple?lang=en" target='_blank'>
          <TwitterIcon className='follow'/>
        </a>
        <a className="p-1 text-light" href="https://www.youtube.com/user/apple" target='_blank'>
          <YouTubeIcon className='follow'/>
        </a>
        <div className='text-light mt-3'><CallIcon/> +91 <a href='tel:+917565816193' className='link'>7565816193</a>/<a href="tel:+918563027649" className='link'>8563027649</a></div>
        <div className='text-light mt-1'><EmailIcon/><a href="mailto:bhucrackexam@gmail.com" className='link'> bhucrackexam@gmail.com</a></div>
      </div>
      <GoToTop/>
    </BrowserRouter>
  );
}

export default App;

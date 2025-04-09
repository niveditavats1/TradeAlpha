
import '../../style/about.css';
import Author from '../author/Author';
import usrimg from '../../assets/Nivi_Pic.jpeg';
import usrimg2 from '../../assets/nivi.jpg';

const About = ({ setUserInParentComponent }) => {
   const handleLogout = (event) => {
    event.preventDefault();
    setUserInParentComponent(prevState => ({
        ...prevState,
        isLoggedIn:false
    } ));
   };
   
   return(<>
        <h1>About us</h1>
        <Author img={usrimg}  bio={'This is the bio'}/>
        <Author img={usrimg2}  bio={'This is the bio'}/>
        <button onClick={handleLogout}>Logout</button>
        
        </>);
}

export default About;   
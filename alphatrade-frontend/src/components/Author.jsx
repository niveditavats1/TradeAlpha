// import userpic from '../../assets/Nivi_Pic.jpeg';
import '../style/author.css'


const Author = ({img, bio}) => {
    return(<>
    <div className="author-container">
        <img className="user-img" src={img} />
        <p className='user-bio'> {bio}</p>


    </div>  
    </>);
}
export default Author;
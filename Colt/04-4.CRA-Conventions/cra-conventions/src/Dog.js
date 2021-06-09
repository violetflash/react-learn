import './styles/Dog.css';
import pug from './img/pug.jpg';

function Dog() {
    return (
        <div className="Dog">
            <p className="Dog-title">I am a Dog</p>
            <img className="Dog-image" src={pug} alt=""/>
        </div>
    )
}

export default Dog;

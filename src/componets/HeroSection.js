import { Button } from "./Button";
import './HeroSection.css'


function HeroSection(){
    return(
        <div className="hero-container">
            <img src='/public/img-3.jpg'></img>
            <h1>Walks Outdoor Tracking</h1>
            <p>Planning a outdoor adventure?</p>
            <p>We've got you covered</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >Login
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >Sign Up
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
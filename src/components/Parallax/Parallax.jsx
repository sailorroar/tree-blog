import classes from './Parallax.module.css'
import parallax0img from '../../images/parallax0.png'
import parallax1img from '../../images/parallax1.png'
import parallax2img from '../../images/parallax2.png'
import parallax3img from '../../images/parallax3.png'
import parallax4img from '../../images/parallax4.png'
import parallax5img from '../../images/parallax5.png'
import parallax6img from '../../images/parallax6.png'
import parallax7img from '../../images/parallax7.png'
import parallax8img from '../../images/parallax8.png'

const Parallax = () => {
    return (
        <div className={classes.parallax}>
            <div>
                <img src={parallax0img} alt="parallax0" id="parallax0"></img>
                <img src={parallax1img} alt="parallax1" id="parallax1"></img>
                <img src={parallax2img} alt="parallax2" id="parallax2"></img>
                <img src={parallax3img} alt="parallax3" id="parallax3"></img>
                <img src={parallax4img} alt="parallax4" id="parallax4"></img>
                <img src={parallax5img} alt="parallax5" id="parallax5"></img>
                <img src={parallax6img} alt="parallax6" id="parallax6"></img>
                <img src={parallax7img} alt="parallax7" id="parallax7"></img>
                <img src={parallax8img} alt="parallax8" id="parallax8"></img>
            </div>
        </div>
    )
}

export default Parallax
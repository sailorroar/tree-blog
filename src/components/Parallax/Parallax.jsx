import './Parallax.css'
import $ from 'jquery';

const Parallax = () => {

    $(function () {
        window.addEventListener("scroll", function () {

            let top = this.scrollY;

            let layers = $(".parallax__layer");
            let speed;
            layers.each(function () {
                speed = $(this).attr('data-speed');
                let yPos = -(top * speed / 100);
                $(this).attr('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
            });
        });
    });

    return (
        <div>
            <div className="parallax">
                {/* <div className="noneparallax" id="noneparallax"></div> */}
                <div className="parallax__layer" id="parallax-0" data-speed="2"></div>
                <div className="parallax__layer" id="parallax-1" data-speed="5"></div>
                <div className="parallax__layer" id="parallax-2" data-speed="11"></div>
                <div className="parallax__layer" id="parallax-3" data-speed="16"></div>
                <div className="parallax__layer" id="parallax-4" data-speed="26"></div>
                <div className="parallax__layer" id="parallax-5" data-speed="36"></div>
                <div className="parallax__layer" id="parallax-6" data-speed="49"></div>
                <div className="parallax__layer" id="parallax-7" data-speed="69"></div>
                <div className="test">Tree Blog</div>
                <div className="parallax__layer" id="parallax-8" data-speed="100"></div>
            </div>
        </div>
    )
}

export default Parallax
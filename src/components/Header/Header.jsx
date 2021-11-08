import classes from './Header.module.css'

const Header = () => {

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        let scrollPos = 1;
        let header = document.getElementById('header');

        if(document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos) {
            header.classList.add(classes.active)
        } else {
            header.classList.remove(classes.active)
        }
    }

    return (
        <header className={classes.header} id='header'>
            <div className={classes.headerWrap}>
                <a href="#1">Logo</a>
                <nav>
                    <ul>
                        <li id='test'><a href="#1">Home</a></li>
                        <li><a href="#1">Trees</a></li>
                        <li><a href="#1">Contact</a></li>
                        <li><a href="#1">Profile</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
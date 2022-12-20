import tankard from '../img/TheTallTankard_Zoomed_NoBackground.png';

function Footer () {
    return (
        <footer>
            <div>
                <strong><a href="https://thetalltankard.github.io">The Tall Tankard</a></strong>
            </div>
            <br/>
            <div>
                <img src={tankard} className="tankard-logo flipped" alt="tankard logo" />
                <img src={tankard} className="tankard-logo" alt="tankard logo" />
            </div>
            <br/>
        </footer>
    )
}

export default Footer;
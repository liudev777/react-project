import globe from "../images/globe.png"

export default function Navbar() {
    return (
        <div>
            <nav>
                <img src={globe} alt="globe image" className="nav--image"/>
                <div className="nav--title">
                    my travel journal
                </div>
            </nav>
        </div>
    );
}

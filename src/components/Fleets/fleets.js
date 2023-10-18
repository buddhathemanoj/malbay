import "./fleets.css"
import innova from "../../asset/20201015102234_2021-Toyota-Innova-Crysta-facelift-grey-studio-removebg-preview.png"
const Fleets = () => {
    return(
        <div className="fleets-container">
            <div className="fleets-top-container">
                <div className="ultimate-head-container">
                 <h1 className="ultimate-heading">FIND THE ULTIMATE BARGAINS</h1>
                 </div>
            </div>
            <ul className="fleet-list-container">
                <li className="fleet-list-item">
                    <img src={innova} alt="fleet-img" className="fleet-img" width={350} />
                    <h1>Toyota Innova</h1>
                </li>
            </ul>
        </div>
    )
}

export default Fleets
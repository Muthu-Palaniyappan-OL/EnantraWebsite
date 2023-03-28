import styles from '../../styles/Home.module.css'
import sponsors from "../../data/sponsors"

export default function Sponsors() {
    return <div style={{ backgroundColor: "#212529", borderRadius: "3vmin", margin: "2vmin" }}>
        <center><h1 style={{ paddingTop: "1rem", fontSize: "2.5rem" }}>Sponsors</h1></center>
        <div className={`${styles.sponsorCover} d-flex justify-content-evenly flex-wrap pb-3 align-items-center`}>
            {sponsors.map(e => {
                return <img key={e.url} className={`img-fluid rounded ${styles.sponserImage}`} src={e.url} />
            })}
        </div>
    </div >
}
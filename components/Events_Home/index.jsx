import CoverPage from "../Utility/CoverPage";
import styles from "./index.module.css";
import Link from "next/link";
import TrailingUrl from '../../global.config'

const Events = ({ data, title }) => {

  if (title == "workshops")
    title = "Workshops"
  if (title == "megaevents")
    title = "Mega Events"
  if (title == "minievents")
    title = "Mini Events"
  
  return (
    <CoverPage>
      <center><h1 className={styles.title}>{title}</h1></center>
      <div className={styles.container}>
        <br />
        {data.map((e) => {
          return (
            <div className={`${styles.event} m-2`} key={e.name}>
              <Link href={`/${e.underDomain}/${e.name}${TrailingUrl.trailingUrl}`}>
                <div>
                  <h6>{e.date}</h6>
                  <h3>{e.name}</h3>
                </div>
                <img className="p-2" src={e.icon}></img>
              </Link>
            </div>
          );
        })}
      </div>
    </CoverPage>
  );
};

export default Events;

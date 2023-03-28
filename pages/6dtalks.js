import CoverPage from '../components/Utility/CoverPage'
import { peoples } from '../data/peoples'
import styles from '../styles/6dt.module.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Modal from '../components/6DT/Modal'
import React from 'react'

const SixDTalks = () => {
    const [modalShow, setModalShow] = React.useState("");

    return (
        <CoverPage>
            <div className={styles.container}>
                <br />
                <center><h1> 6 Degree Speakers </h1></center>
                <div className="row m-0">
                    {peoples.map(p => {
                        return <div key={p.name} className={'col-md-4'} onClick={() => setModalShow(p.name)}>
                            <AnimationOnScroll initiallyVisible="true" animateOnce="true" animateIn="bounceInLeft">
                                <div className={styles.profileCard2}>
                                    <img src={p.img} className="img img-responsive" />
                                    <div className={styles.profileName}>{p.name}</div>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    })}
                </div>
            </div >
            <Modal show={modalShow !== ""} onHide={() => setModalShow("")} title={modalShow} />
        </CoverPage >
    )

}

export default SixDTalks 
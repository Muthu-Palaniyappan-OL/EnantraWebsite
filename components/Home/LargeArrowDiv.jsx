import styles from '../../styles/Home.module.css'

function scrollPage(e) {
    window.scrollBy(0, window.innerHeight);
}

export default function LargeArrowDiv() {
    return <div style={{ top: "90%", height: "90vh", display: 'flex', zIndex: 2, justifyContent: "center" }}>
     <img src="/dd.svg" alt="down-arrow" className={styles.dd} onClick={scrollPage} />
    </div>
}

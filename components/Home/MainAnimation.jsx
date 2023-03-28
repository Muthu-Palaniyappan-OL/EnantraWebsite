import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles'
import { SSRProvider } from 'react-bootstrap';
import styles from '../../styles/Home.module.css'

const option = {
    fullScreen: {
        enable: true,
        zIndex: "auto"
    },
    particles: {
        number: {
            value: 160,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        }
    },
    interactivity: {
        detect_on: 'window',
        events: {
            onhover: {
                enable: true,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
            },
            repulse: {
                distance: 400,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true,
    background: {
        color: "rgba(0,0,0,0.2)",
        image: "url('/enantraLogoWhite.svg')",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "35vh auto"
    }
}

export default function MainAnimation({ home, children }) {
    const init = async (engine) => {
        await loadFull(engine);
    }

    return <>
        <SSRProvider ><Particles className={styles.tsparticles} style={{
            opacity: home == "true" ? 1 : 0.2
        }} init={init} options={option} /></SSRProvider >
        <div style={{ position: "absolute", zIndex: 2, height: "100%", width: "100%" }}> {children} </div>
    </>
}

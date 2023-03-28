import MainPage from '../components/Utility/MainPage'
import Footer from '../components/Home/Footer'
import LargeArrowDiv from '../components/Home/LargeArrowDiv'
import Sponsors from '../components/Home/Sponsors'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { SSRProvider } from "react-bootstrap"

export default function Home() {
  return (
    <SSRProvider>
      <MainPage>
        <LargeArrowDiv />
        <br />
        <AnimationOnScroll animateIn="bounceInLeft" animateOnce="true" duration="1" offset="250">
          <div style={{ backgroundColor: "#212529", borderRadius: "3vmin", margin: "2vmin" }}>
            <center><h1 className='fs-1 fw-bold' style={{ paddingTop: "1rem" }}>Enantra</h1></center>
            <br></br>
            <div className="d-flex justify-content-evenly flex-wrap pb-3">
              <Container>
                <Row className='flex-column'>
                  <Col className='d-flex justify-content-evenly pb-4'>
                    <img style={{ height: "clamp(13rem, 10vmax, 20rem)" }} className={`img-fluid rounded`} src="/enantraLogo.svg" />
                  </Col>
                  <Col>
                    <p style={{ textAlign: "justify" }} >Enantra the flagship event of AUSEC, a 3-day Entrepreneurship fest which happens every year, mainly aims at spreading awareness on entrepreneurship. Enantra consists of 5+ workshops, 6+ mini events and mega events. Fests’ signature event “6 Degree Talks (6DT)”, which felicitates the leading entrepreneurs of our country, is an opportunity for students to witness entrepreneurs and CEOs out there in the real world come and speak about their journey in their respective fields. This event provides the right platform for the audience to interact and get the right guidance to channelize their dreams and ideas into reality.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div >
        </AnimationOnScroll>
        <br />
        <AnimationOnScroll initiallyVisible="true" animateOnce="true" animateIn="bounceInLeft" duration="1" offset="250">
          <Sponsors />
        </AnimationOnScroll>
        <br />
        <Footer />
      </MainPage>
    </SSRProvider>
  )
}
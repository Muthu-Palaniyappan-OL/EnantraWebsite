import Navigationbar from '../Home/NavBar'
import Footer from '../Home/Footer'
import Header from '../Home/Header'
import MainAnimation from '../Home/MainAnimation'

export default function MainPage({ children }) {
    return (
        <>
            <Header />
            <MainAnimation home="false"> {/* For Other Pages make home="false" */}
                <Navigationbar />

                {children}

                <Footer />
            </MainAnimation>
        </>
    )
}

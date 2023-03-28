import Navigationbar from '../Home/NavBar'
import Header from '../Home/Header'
import MainAnimation from '../Home/MainAnimation'

export default function MainPage({ children }) {
    return (
        <>
            <Header />
            <MainAnimation home="true"> {/* For Other Pages make home="false" */}
                <Navigationbar />

                {children}

            </MainAnimation>
        </>
    )
}

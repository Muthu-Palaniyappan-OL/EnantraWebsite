import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MiniEvents from '../../data/mini-events';
import TrailingUrl from "../../global.config";


function Navigationbar() {
    const trailingUrl = TrailingUrl.trailingUrl;
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/" style={{ fontSize: "3.5vh" }}> <img src='/enantraLogoWhite.svg' style={{ height: "7vh" }} /> &nbsp; Enantra 7.0 </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href={`/megaevents${trailingUrl}`}>Mega Events</Nav.Link>
                            <NavDropdown title="Mini Events" menuVariant='dark' id="basic-nav-dropdown">
                                {MiniEvents.data.map(e => {
                                    return <NavDropdown.Item key={e.name} href={`/minievents/${e.name}`}> {e.name}</NavDropdown.Item>
                                })}
                            </NavDropdown>
                            <Nav.Link href={`/workshops${trailingUrl}`}>Workshop</Nav.Link>
                            <Nav.Link href={`/6dtalks${trailingUrl}`}>6 DT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigationbar;

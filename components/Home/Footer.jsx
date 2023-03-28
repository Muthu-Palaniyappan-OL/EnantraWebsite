import React from "react"
import minievents from "../../data/mini-events"

const Footer = () => {
    return <footer style={{ backgroundColor: "#212529" }} className="page-footer font-small blue pt-4 mt-3">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <div>
                        <h5>Contact Us</h5>
                        <address>
                            <strong>Centre for Entrepreneurship Development</strong> <br />

                            #302, 2nd Floor, Platinum Jubilee Building,
                            AC Tech Campus, Anna University,
                            Sardar Patel Road, Guindy,
                            Tamilnadu, Chennai - 600 025
                        </address>


                        Email: <a href="mailto:student2021ced@gmail.com">student2021ced@gmail.com</a>
                    </div>
                </div>

                <hr className="clearfix w-30 d-md-none mt-3" />

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><a href="/megaevents">Mega Events</a></li>
                        <li><a href="/minievents">Mini Events</a></li>
                        <li><a href="/workshops">Workshop</a></li>
                        <li><a href="/6dtalks">6 DT</a></li>
                    </ul>
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Mini Events</h5>
                    <ul className="list-unstyled">
                        {minievents.data.map(e => {
                            return <li key={e.name}><a href={`/minievents/${e.name}`}>{e.name}</a></li>
                        })}
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright d-flex flex-wrap justify-content-center py-3">
            <span className="w-100 text-center fw-bold">Developed By </span>
            <a className="p-2" href="https://www.linkedin.com/in/naveen-prakaasham-k-s-v-262252183/"> Naveen Prakaasham K S V </a>
            <a className="p-2" href="https://in.linkedin.com/in/muthu-palaniyappan-ol-162422201"> Muthu Palaniyappan OL </a>
            <a className="p-2" href="https://www.linkedin.com/in/kumaran-3955901b0/"> Kumaran B </a>
            <a className="p-2" href="https://www.linkedin.com/in/venu-arvind-095432218"> Venu Arvind A </a>
            <a className="p-2" href="https://www.linkedin.com/in/edumba-vannia-raja-t-1946741b3/"> Edumba Vannia Raja T </a>
            <a className="p-2" href="https://www.linkedin.com/in/rohith-shankar/"> Rohit Shankar </a>
            <a className="p-2" href="https://www.linkedin.com/in/nithya-rajkumar-719886212/"> Nithya Rajkumar </a>
        </div>
        <div className="footer-copyright text-center py-3">© 2022 Copyright:
            Anna University Student Entrepreneurship Club
        </div>

    </footer>
}

export default Footer

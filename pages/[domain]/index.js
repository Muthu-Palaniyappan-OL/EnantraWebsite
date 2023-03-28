import MegaEvents from "../../data/mega-events.js"
import MiniEvents from "../../data/mini-events.js"
import Workshops from "../../data/workshop.js"
import Event from "../../components/Events_Home"
import { SSRProvider } from "react-bootstrap"



const Domain = ({ data, title }) => {

    return <SSRProvider>
        <Event data={data} title={title} />
    </SSRProvider>

}



export const getStaticProps = (context) => {



    const { params } = context, domain = params.domain

    var data;

    if (domain === "minievents") data = MiniEvents.data
    else if (domain === "megaevents") data = MegaEvents.data
    else data = Workshops.data

    return {
        props: {
            data,
            title: domain
        }
    }
}



export const getStaticPaths = () => {

    const options = [
        { params: { domain: "workshops" } },
        { params: { domain: "minievents" } },
        { params: { domain: "megaevents" } }

    ]

    return {
        paths: options,
        fallback: false
    }

}

export default Domain 

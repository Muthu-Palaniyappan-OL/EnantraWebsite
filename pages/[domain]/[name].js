import MegaEvents from "../../data/mega-events.js"
import MiniEvents from "../../data/mini-events.js"
import Workshops from "../../data/workshop.js"
import EventDesciption from "../../components/Event_Description"

const Description = ({data})=>{

    return <EventDesciption data={data} />

}

export const getStaticProps = (context)=>{

    const {params} = context ,name= params.name , domain = params.domain
    
    var data ;

    if(domain==="minievents") data = MiniEvents.getEvent(name)
    else if(domain==="megaevents") data = MegaEvents.getEvent(name)
    else data = Workshops.getEvent(name)

    return {
        props :{
            data 
        }
    }
}



export const getStaticPaths = ()=>{

    
    const megaList = MegaEvents.data.map(event=>{
        return {
            params:{
                name :  event['name'] ,
                domain : "megaevents"
            }
        }
    })
    const miniList = MiniEvents.data.map(event=>{
        return {
            params:{
                name : event["name"],
                domain : "minievents"
            }
        }
    })
    const workshopList = Workshops.data.map(event=>{
        return {
            params:{
                name :event["name"],
                domain : "workshops"
            }
        }
    })

    const options  = megaList.concat(miniList).concat(workshopList)

    return {
        paths :options,
        fallback : false
    }

}

export default Description ;

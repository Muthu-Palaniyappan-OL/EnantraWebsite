const data = [
    {
        "name": "AU Carnival",
        "underDomain": "megaevents",
        "icon": "/Mega Events/au-carnival-white.png",
        "image": "",
        "date": "30 Nov 22, 10:00 AM to 30 Nov 22, 6:00 PM IST ",
        "location": "Vivek Auditorium, Anna University",
        "contactPhone": "+919789002028",
        "contactName": "Dhanya Venkateswaran",
        "registrationUrl": "https://unstop.com/creative-cultural-event/au-carnival-enantra-entrepreneurship-mantra-anna-university-au-chennai-488648",
        "contactEmail": "",
        "oneLineDescription": "AU Carnival, which is inspired by school carnivals is an event that aims to give a fun and delightful time for the",
        "multiLineDescription": `AU Carnival, which is inspired by school carnivals is an event that aims to give a fun and delightful time for the participants of Enantra. This gives them a break from the competitions and workshops and ensures that participants get a holistic experience from Enantra. AU Carnival will have a lot of mini-sports and non-sport events in which everyone is allowed to participate.

        Some of the events that you can expect to see there are cricket stump game, football juggling, pull up, push up, plank, mini golf, ring toss, table tennis, ping pong, hockey scoop, connections, friendship test and many more.
        
        This event will be happening in Vivekananda Auditorium, the biggest auditorium on campus for an entire day. This is set to be one of the major events in this edition of Enantra.`
    },
    {
        "name": "6DT - 6 Degree Talks",
        "underDomain": "megaevents",
        "icon": "/Mega Events/6DT white.png",
        "image": "",
        "date": "01 Dec 22, 03:30 PM to 01 Dec 22, 08:00 PM",
        "location": "Vivek Auditorium, Anna University",
        "contactName": "Akshay",
        "contactPhone": "+919841044390",
        "registrationUrl": "https://unstop.com/conference/6dt-6-degree-talks-enantra-entrepreneurship-mantra-anna-university-au-chennai-488810",
        "contactEmail": "",
        "oneLineDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "multiLineDescription":    `The signature event of Enantra “6 Degree Talks (6DT)”, which felicitates the leading entrepreneurs of our country, is an opportunity for students to witness entrepreneurs and CEOs out there in the real world come and speak about their journey in their respective fields.

        A platform where the speakers from their respective fields share their journey to success and in turn inspire the students who have gathered. This event provides the right platform for the audience to interact and get the right guidance to channel their dreams and ideas into reality. 6DT is a place where a lot of speakers including Lokesh Kanagaraj, Hip Hop Tamizha (Aadi), Abishek Kumar, Nirmal Pillai, Vignesh Kae (Abhistu), Joshua Aaron, and Kishen Das have shared their experiences which has inspired a lot of students.
        
        The celebrity entrepreneurs lineup that 6DT has had in the previous years has set a benchmark for the upcoming years and the buzz that 6DT has created among the general audience & college students is unparalleled. This event will happen in Vivekananda Auditorium with around 1000 students eagerly participating and developing their vision.
        
        Enantra the flagship event of AUSEC Anna University, Chennai is a 3-day event that mainly focuses on bringing out the entrepreneurial spirit in each person. The event incorporates many mega and mini-events whose main objective is to channel the entrepreneur within every person. Students from various departments and colleges gather here to experience the fun and develop their skills in entrepreneurship. The event also includes workshops that are conducted for the students to gain the right knowledge in various technical and non-technical concepts. AU carnival is all set to commence this year with a lot of fun games and many other entertaining activities. 
        
        AUSEC (Anna University Student Entrepreneurship Club) is one of the official clubs of Anna University that works in promoting student entrepreneurs. This club includes various domains like Events and Workshops, External Relations, Startup, Operations, Marketing, Logistics, Content and Media, Tech, etc. The club aims to promote entrepreneurship amongst college students and give guidance to those who have startup ideas. AUSEC is a part of CED (Centre for Entrepreneurship Development) which is the right place for young minds to approach innovative entrepreneurial ideas. This club creates an opportunity for students to meet many popular CEOs and Entrepreneurs and get the right knowledge in this field.
        
        Anna University is a prestigious institution situated in Chennai that has been guiding students from various backgrounds to build better careers for more than a century. This institution has four university campuses namely CEG, ACT, MIT, SAP, other regional campuses, and affiliated institutions. The university not only helps a student to excel in academics but also gives them an equal opportunity to nurture other skills like photography, sports, art, event management, entrepreneurship, etc. The university prides itself on the academic merit that it has held during its tenure. The institution will work to uphold its legacy and reach greater heights.
        
        `
    },
    {
        "name": "Auction House",
        "underDomain": "megaevents",
        "icon": "/Mega Events/Auction-White.png",
        "image": "",
        "date": "1 Dec 22, 9:00 AM to 01 Dec 22, 2:00 PM",
        "location": "Vivek Auditorium, Anna University",
        "contactPhone": "+918610807838",
        "contactName": "Yogesh V",
        "registrationUrl": "https://unstop.com/p/auction-house-enantra-entrepreneurship-mantra-anna-university-au-chennai-495223",
        "contactEmail": "",
        "oneLineDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "multiLineDescription": `Anna University Student Entrepreneurship Club Presents “Auction House” as a part of Enantra in its 7th edition and encourages students to participate in this mega event with three simple requirements – vigilance, punctiliousness and patience. 

        Auctions have certain distinct characteristics like the bidding process, the hammer, the whole setting is quite interesting. An interested party is aware of the competing bid amounts and continues to raise their bid until they are either declared the winner of the auction (i.e., they submitted the last highest bid within the auction time limit) or until they decide to drop out of the bidding. An auctioneer, by selling property for another at an auction, is the agent of the seller and the bidders then call out their bids, with each bid being higher than the subsequent bid. Before beginning any auction, it is the duty of every auctioneer to state fully the terms and conditions upon which the sale will be made. Further, an auctioneer shall announce the character, quality and description offered for sale to the bidders present. The bidders lift up their bidder card to announce their bid price so the auctioneer can identify who is making the bid. The process ends when there are no more bids, and the buyer making the highest bid gets the item. The highest bidder takes ownership of the item immediately after paying their bid price. 
        
        The event has a professional auction set up with chairs arranged in clusters with each team having 2-3 participants. The rules and instructions will be read out in the beginning and also every team will be handed over a manual for any further enquiries about the event. Participants take up roles as a startup/company who will be presented with a problem and will be given a certain stipulated amount to spend in the bidding. Every participant in the team as a whole gets additional amount of money if they do the pre requisite. The aim of the event is for the participants to wisely plan their startup and purchase necessary items in the auction against other competitors who will have the same problem to solve. 
        `
    }
]


const getEvent = (name) => {
    return data.find(event => event.name == name);
}


export default {
    data, getEvent
}

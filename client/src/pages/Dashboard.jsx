import TicketCard from "../components/TicketCard"

const Dashboard = () => { 

    const tickets = [
       {
         category: 'Q1 2022', 
         color: 'red',
         title: 'NFT Safety 101 Video',
         owner: 'absi ss',
         avatar: 'https:xxxxxx LINK Avatar',
         status: 'done',
         priority: 5,
         progress: 40,
         description: 'Make a video showcaseing how to work with NFTs safely.',
         timestamp: '2022-02-11T07:36:17+0000'
       },
       {
         category: 'Q1 2022', 
         color: 'red',
         title: 'Build a Sell AI Model',
         owner: 'absi ss',
         avatar: 'https:freepik LINK Avatar',
         status: 'working on it',
         priority: 2,
         progress: 70,
         description: 'Make a video about AI',
         timestamp: '2022-02-13T07:36:17+0000'
       },
       {
         category: 'Q2 2022', 
         color: 'blue',
         title: 'Build a bot',
         owner: 'abs 22',
         avatar: 'https:xxxxxx LINK Avatar',
         status: 'working on it',
         priority: 3,
         progress: 10,
         description: 'Make video about making a bot',
         timestamp: '2022-02-15T07:36:17+0000'
       }
    ]

    /*Aos 38:49 minutos*/
    const uniqueCategories = [
        ...new Set( tickets?.map( ({ category }) => category ) )
    ]
    console.log( uniqueCategories )


    return (
        <div className="dashboard">
              <h1>My Projects</h1>
              <div className="ticket-container" >
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                         <div key={ categoryIndex } >
                               <h3>{uniqueCategory}</h3>
                               {tickets.filter(ticket => ticket.category ===  uniqueCategory)
                                  .map( (filteredTicket, _index) => (
                                    <TicketCard 
                                        id={_index}
                                        color={filteredTicket.color}
                                        ticket={filteredTicket}
                                    />
                                  ))
                               }
                         </div>
                ))}
              </div>
        </div>
    )
}
export default Dashboard
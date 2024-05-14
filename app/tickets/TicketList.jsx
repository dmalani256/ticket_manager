//import {environment} from '../environment/environment'
import Link from 'next/link'
import { resolve } from 'path';
async function getTickets(){
    //const api = environment.apiUrl;
    //await new Promise(resolve => setTimeout(resolve, 3000));
    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0
        }
    });
    return res.json()
}


export default async function TicketList() {
  const tickets = await getTickets();
  //fetch data
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <small>Created by {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
        
      ))}
      {tickets.length === 0 && <p className="text-center">No tickets open!</p>}

      <Link href="/tickets/create">
        <button className="btn-primary">Add Tickets</button>
      </Link>
      <br />
    </>
  );
}

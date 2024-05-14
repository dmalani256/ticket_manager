import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Welcome to the Ticket Manager, please click View Tickets or click on the Tickets tab on the navigation bar to see any open tickets!
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>
    </main>
  );
}

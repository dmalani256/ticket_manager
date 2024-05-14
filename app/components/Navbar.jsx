import Link from 'next/link'
import Image from 'next/image'
import logo from './clipboards.png'

export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <Image
          src={logo}
          alt="Ticket Manager logo"
          width={70}
          height={100}
          placeholder="blur"
        />
      </Link>
      <h1>Ticket Manager</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}

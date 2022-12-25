import type { NextPage } from 'next'
import Link from 'next/link';

const Footer: NextPage = () => {
  return (
    <footer>
      <h2>Footer</h2>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Register</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/todolist">Todolist</Link></li>
      </ul>
    </footer>
  )
}

export default Footer
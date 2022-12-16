import type { NextPage } from 'next'
import Link from 'next/link'

const Dashboard: NextPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>

      <Link href="/todolist">View Todo Lists</Link>
    </div>
  )
}

export default Dashboard
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Login: NextPage = () => {
  const router = useRouter()
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => router.push('/dashboard')}>Login</button>
    </div>
  )
}

export default Login
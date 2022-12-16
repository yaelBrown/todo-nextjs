import type { NextPage } from 'next'
import styles from '../styles/Index.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Index</h1>
      </main>
    </div>
  )
}

export default Home

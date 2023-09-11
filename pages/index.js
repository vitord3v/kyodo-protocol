import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UserCheck from "../components/UserCheck/UserCheck"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <UserCheck />
      </main>
    </div>
  )
}

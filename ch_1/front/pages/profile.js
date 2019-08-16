import react from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head'

const Profile = () => {
  return (
    <>
      <Head>
        <title>Tutorials for NEXT NODE</title>
        <link
          rel="stylesheet"
          href="http://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <div>
          <h1>Profile</h1>
        </div>
      </AppLayout>
    </>
  )
}

export default Profile

// pages index.js
import React from 'react'
import Head from 'next/head'
import Link from 'next/Link'
import AppLayout from '../components/AppLayout'

const Home = () => {
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
        <div> Hello NEXT!</div>
      </AppLayout>
    </>
  )
}

export default Home

// next는 react를 알아서 import 해줌
//

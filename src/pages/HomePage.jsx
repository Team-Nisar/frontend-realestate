import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroSection from '../components/HeroSection'
import HotSellingPage from './HotSellingPage'

const HomePage = () => {
  return (
    <Layout title={"HomePage"}>
      <div>
        <HeroSection/>
        <HotSellingPage/>
      </div>
    </Layout>
  )
}

export default HomePage
import React from 'react'
import Layout from '../components/Layout/Layout'
import HeroSection from '../components/HeroSection'
import HotSellings from '../components/HotSellings'
import Benifits from '../components/Benifits'
import TenantsAndLandlords from '../components/TenantsAndLandlords'

const HomePage = () => {
  return (
    <Layout title={"HomePage"}>
      <div>
        <HeroSection/>
        <Benifits/>
        <HotSellings/>
        <TenantsAndLandlords/>
      </div>
    </Layout>
  )
}

export default HomePage
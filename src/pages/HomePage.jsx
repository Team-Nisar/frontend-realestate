import React from 'react'
import Layout from '../components/Layout/Layout'
import SearchBar from '../components/Searchbar'
import HeroSection from '../components/HeroSection'
import HotSellingProperties from '../components/HotSelling'

const HomePage = () => {
  return (
    <Layout title={"HomePage"}>
      <div>
        <HeroSection/>
        <SearchBar/>
        <HotSellingProperties/>
      </div>
    </Layout>
  )
}

export default HomePage
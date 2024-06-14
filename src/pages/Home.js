import React from 'react'
import HomeImage from '../components/HomeImage'
import HomeMain from '../components/HomeMain'
import HomeCapital from '../components/HomeCapital'
import HomeSearch from '../components/HomeSearch'
import HomeArticle from '../components/HomeArticle'

const Home = () => {
  return (
    <>
        <HomeImage />
        <HomeSearch />
        <HomeCapital />
        <HomeMain />
        <HomeArticle />

    </>
  )
}

export default Home
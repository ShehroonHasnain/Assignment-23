import React from 'react'
import CreatePost from '../../components/createPost/CreatePost'
import FeedListing from '../../components/feedListing/FeedListing'
import Navbar from '../../components/navbar/Navbar'
import './Home.css'
import LeftSideBar from '../../components/leftSideBar/LeftSideBar'
import RightSideBar from '../../components/rightSideBar/RightSideBar'



export default function Home() {
  return (
    <div className='home-container'>
    <Navbar/>
    <section className='center-layout'>
    <aside className='left-aside-layout'>
{/* <p>asid</p>
<div className='left-aside-demo'>Aside Demo components </div>
<div className='left-aside-demo'>Aside Demo components </div>
<div className='left-aside-demo'>Aside Demo components </div> */}
<LeftSideBar/>
    </aside>
    <main className='main-layout'>
    <CreatePost/>
    <FeedListing/>
    </main>
    <aside className='right-aside-layout'>
{/* <p>asid</p>
<div className='right-aside-demo'>Aside Demo components </div>
<div className='right-aside-demo'>Aside Demo components </div>
<div className='right-aside-demo'>Aside Demo components </div> */}
<RightSideBar/>
    </aside>
    
    </section>
    </div>
  )
}

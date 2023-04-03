import React from 'react'
import '../Styles/Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className='home-content'>
        <div className='txt'>
            <h2>Changing Your <span>working</span> habits</h2>
            <p>Create Your own Task and Complete it</p>
            <button>Create List</button>
        </div>
       <div className='img-div'>
       <img src='../Avtar.png'/>
       </div>
        
      </div>
    </div>
  )
}

export default Home
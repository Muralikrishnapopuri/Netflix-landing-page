import React from 'react'
import './Home.css';
import data from "../../components/data/movies.js"
function Home() {
  return (
    <div className='Home' style={{color:"white",paddingTop:"9rem",height:"100vh"}}>
        <h1>Netflix Originals</h1>
        <p style={{width:"690px",fontSize:"1.4rem"}}>Netflix is the home of amazing original programming that you can’t find anywhere else. Movies, TV shows, specials and more, it’s all tailored specifically to you.</p>
        <div className='movies'>
            <span style={{paddingBottom:'5rem'}}>Your Next Watch</span>
            <section>
                {
                    data&&
                    <div className='movies-list' style={{display:"flex",gap:"2rem"}}>
                        {data.map((movie,index)=>(
                            <div className='data-list' >
                                <img src={movie.poster} style={{width:"24rem"}} alt="" />
                                <h4>{movie.title}</h4>
                            </div>
                        ))}
                    </div>
                }
            </section>
        </div>
    </div>
  )
}

export default Home

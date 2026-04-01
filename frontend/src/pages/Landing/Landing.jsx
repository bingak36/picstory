import React from 'react'
import Landing from 'Landing.scss'
import Button from '../../components/ui/Button'


const bgImages =[
    './images/landing-sl-1.png',
    './images/landing-sl-2.png'
]
import { NavLink } from 'react-router-dom'

const Landing = () => {
  return (
    <section className='landing'>
        <div className="inner">
            <div className="t-wrap">
                <img src="/images/landing-img.png" alt="img"/>
            </div>
            <h2>
                <img src="/images/logo.svg" alt="logo" />
            </h2>
            <p>
                사진 한장. 한줄 메모. 검색. 공유까지 - Picstory
            </p>
        </div>
        <NavLink>
            <Button text="시작하기" className='intro' icons={true}/>
        </NavLink>


    </section>
  )
}

export default Landing

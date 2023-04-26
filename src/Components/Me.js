import React from 'react'
import './Me.css'
import cm from '../assets/cm.png'
import jcole from '../assets/jcole.png'
import medi from '../assets/medi.png'
const Me = () => {
  return (
    <div>
      <div className='mma'>
        <h1>MMA</h1>
        <div className='mma1'>
          <img src={cm} alt="" />
          <p> As a fitness enthusiast and a devoted follower of MMA and the UFC, my passion for this thrilling sport has grown over the past year. From my childhood days of practicing Taekwondo, I have always been drawn to the athleticism, strategy, and discipline of martial arts. Over the past few months, I have avidly followed the world of MMA, eagerly watching fights, analyzing techniques, and being inspired by the physical conditioning, mental toughness, and relentless drive of the professional fighters. MMA embodies important values such as respect, honor, and sportsmanship, making it a captivating and impactful sport to follow.</p>
        </div>
      
          
      </div>
      <div className='Raps'>
        <h1>Rap and Music</h1>
        <div className='Raps1'>
          <p>As a teenager, I was introduced to the art form of rap and it quickly became a passion of mine. I have been highly impressed by American rapper <u> J. Cole</u>  and his conscious style of rap. His thought-provoking lyrics, powerful storytelling, and socially aware messages resonate deeply with me. I have found myself captivated by his music, listening to his tracks on repeat and appreciating the artistry and skill he brings to the rap game. J. Cole's ability to use his platform to shed light on important social issues and convey meaningful messages through his music has left a lasting impact on me, and I continue to be inspired by his artistry and the impact he has on the rap genre.  </p>
          <img src={jcole} alt="" />
        </div>
      
          
      </div>
      <div className='medi'>
        <h1>Meditation</h1>
        <div className='medi1'>
          <img src={medi} alt="" />
          <p>I have practiced Transcendental Meditation for two years and am now exploring different meditation techniques to expand my practice. Meditation has been a valuable part of my routine, providing benefits such as increased focus, reduced stress, and improved well-being. I am eager to continue my journey of personal growth through mindfulness and self-awareness.</p>
        </div>
      
          
      </div>
    
    </div>
  )
}

export default Me

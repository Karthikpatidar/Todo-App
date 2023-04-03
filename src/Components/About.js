import React from 'react'
import '../Styles/About.css'

const About = () => {
    return (
        <div className='About-home'>
            <h3>About Us</h3>
            <div className='About-content'>
                <div className='about-img'>
                    <img src='../notepad.png' />
                </div>
                <div className='about-txt'>
                    <h2>What is a <span>ToDo</span> List?</h2>
                    <p> It’s a list of tasks you need to complete or things that you want to do.
                        Most typically, they’re organised in order of priority. Traditionally, they’re
                        written on a piece of paper or post it notes and act as a memory aid. As technology
                        has evolved we have been able to create a todo lists with excel spreadsheets, word documents,
                        email lists, todo list apps, Microsoft to do and google to do list to name a few. You can use
                        a to do list in your home and personal life, or in the workplace.</p>
                </div>
            </div>
        </div>
    )
}

export default About
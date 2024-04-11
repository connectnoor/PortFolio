import React from 'react'
import './Project.css'
// import ProjectsLinks from '../ProjectsLinks/ProjectsLinks'
import calculator from './one/calculator.png'
// import landing from './images/landing.jpg'
import reliable from './one/reliable.png'
import coffero from './one/coffero.png'
import password from './one/password-GR.png'
import quote from './one/quot.png'
import todo from './one/todo.png'
import university from './one/university.png'
import Indesceion from './one/inde.png'
import BG from './one/bg.png'
// import Reactjs from '../Reactjs/Reactjs'
import Card from './Card/Card'
import palindrome from './one/palindrome-G.png'

const Project = (props) => {
    return (

        <div id='projects' >
            <h1 id='project-heading' >Projects</h1>
            <div className="all-cards">
                <Card image={coffero} title="Coffero Cafe" source="https://coffero-cafe-react.web.app/" />
                <Card image={reliable} title="Reliable Punching" source="https://connectnoor.github.io/Reliable-Punching/" />
                <Card image={university} title="Eduford Academy" source="https://connectnoor.github.io/univeristy/" />
                <Card image={Indesceion} title="Indecesion App" source="https://indecesion-react-app.web.app" />
                <Card image={palindrome} title="Palindrome Checker" source="https://connectnoor.github.io/Palindrome-Checker/" />
                <Card image={password} title="Password Generator" source="https://password-generator-react-app.web.app/" />
                <Card image={quote} title="Quote Generator" source="https://connectnoor.github.io/Random-Quotes-Generator/" />

                <Card image={todo} title="Todo List App" source="https://connectnoor.github.io/To-Do--List-App/" />
                <Card image={calculator} title="Calculator" source="https://connectnoor.github.io/Calculator-JS/" />
                <Card image={BG} title="BackGround Changer" source="https://background-changer-b16a2.web.app" />

            </div>
        </div>

    )
}

export default Project

// <Card image={university} title="Landing Page" source=" https://connectnoor.github.io/coding-website/" />

import React, {Component} from 'react'
import Card from './projects.component'
import './projects.card-style.css'

import img1 from '../../assets/img/profile/profile.jpg'
import img2 from '../../assets/img/projects/Dungeon-Escape1.png'
import img3 from "../../assets/img/background/background.webp"


class Cards extends Component{
    render() {
        return (
            <div id = 'projects'>
                    <h1 className= 'pt-3 text-center font-details pb-3'>Projects</h1>
            <div className = 'container-fluid d-flex justify-content-center'>
                <div className = 'row my-auto'>
                    <div className = 'col-md-4 my-auto'>
                        <Card imgsrc={img1} text = "hullo" title = "Project1"/>
                    </div>
                    <div className = 'col-md-4 my-auto'>
                        <Card imgsrc={img2} text = "hello" title = "Project2"/>
                
                    </div>
                    <div className = 'col-md-4 my-auto'>
                        <Card imgsrc={img3} text = "hi" title = "Project3"/>
                
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Cards
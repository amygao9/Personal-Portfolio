import React, {Component} from 'react'
import Card from './projects.component'
import './projects.card-style.css'
import './projects.card-style.css'

import img1 from '../../assets/img/profile/profile.jpg'
import img2 from '../../assets/img/projects/Dungeon-Escape1.png'
import img3 from "../../assets/img/background/background.webp"

import appetite1 from '../../assets/img/projects/appetite-login.png'
import appetite2 from '../../assets/img/projects/appetite-profile.png'
import appetite3 from "../../assets/img/projects/appetite-swipe.png"

import spendr1 from "../../assets/img/projects/spendr-home.png"
import spendr2 from "../../assets/img/projects/spendr-analytics.png"
import spendr3 from "../../assets/img/projects/spendr-profile.png"

class Cards extends Component{
    render() {
        return (
            <div id = 'projects'>
                    <h1 className= 'pt-3 text-center font-details pb-3'>Projects</h1>
            <div className = 'container-fluid d-flex justify-content-center'>
                <div className = 'row my-auto'>
                    <div className = 'col-md-4 my-auto'>
                        <Card img1={appetite1} img2 = {appetite2} img3 = {appetite3} 
                        text = "Appetite is the mobile app for food lovers who want to discover and try new cuisines with friends and family, with filters based on type of cuisine, location, and price range." title = "Appetite"/>
                    </div>
                    <div className = 'col-md-4 my-auto'>
                        <Card img1={img2} img2 = {img2} img3 = {img2} text = "An android game involving a series of levels in order to escape a dungeon" title = "Dungeon Escape"/>
                
                    </div>
                    <div className = 'col-md-4 my-auto'>
                        <Card img1={spendr1} img2 = {spendr2} img3 = {spendr3} text = " A Money Social Networking Platform to connect individuals' spending to their budget and share with friends and family. " title = "Spendr"/>
                
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Cards
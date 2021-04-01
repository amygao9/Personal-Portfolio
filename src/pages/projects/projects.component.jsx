import React from 'react'
import './projects.card-style.css'
import Carousel from 'react-bootstrap/Carousel'
const Card = props => {
    return(
        <div className = 'card text-center shadow'>
            <div className = 'overflow'>
                <Carousel>
                    <Carousel.Item>
                    <img
                        className = 'card-img-top'
                        src= {props.img1}
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className = 'card-img-top'
                        src= {props.img2}
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className = 'card-img-top'
                        src= {props.img3}
                    />
                    </Carousel.Item>
                </Carousel>
                
            </div>
            <div className="card-body text-dark">
                <h4 className = "card-title"> {props.title}</h4>
                <p className = "card-text text-secondary"> {props.text} </p>
                
                <a href = "#" className="btn btn-outline-success"> Github</a>
            </div>
        </div>
    )
}
export default Card
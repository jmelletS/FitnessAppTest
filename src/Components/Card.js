import React from 'react'
import './Styles/Card.css'
import CirclesImg from '../Images/circles.png'
class Card extends React.Component {

    render() {
        const {title,description,leftcolor , rightcolor , img} = this.props
        return (
            <div className="Card mx-auto Fitness-Card" style={{backgroundImage:`URL(${CirclesImg}), linear-gradient(to right, ${leftcolor},${rightcolor})`}}>
                
                <div className="Card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img} className="float-right" alt="ImagenExercise"></img>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Card
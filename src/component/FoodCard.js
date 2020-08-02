import React, { Component } from 'react';
import like from '../asserts/Assets/Icons/Icon feather-heart-color.png';
import unlike from '../asserts/Assets/Icons/Icon feather-heart.png';
import history from '../configuration/history'
import { Link } from 'react-router-dom';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
        return ( 
            <>
                <Link to={{ pathname: `/${this.props.id}`, state: {foodName: this.props.name}}} style={{textDecoration: "none"}}>
                    <div className="card">
                        {
                        this.props.label ? <span className="recipe-label">{this.props.label}</span>
                        : ''
                        }
                        <img className="card-img-top" src={this.props.imageSrc} alt="food_image" />
                        <div className="card-body text-left" style={{color: 'black'}}>
                        <div className="d-flex justify-content-between">
                            <h3 className="card-title">{this.props.name}</h3>
                            <img className="like-img-size" src={unlike} alt="like" />
                        </div>
                        {/* <p style={{fontSize: "16px"}}><i className="far fa-clock"></i><span className="mr-3"> 25 mins </span></p> */}
                        <p style={{fontSize: "16px"}}>$<span className="mr-3"> {this.props.price}</span></p>
                        <p className="card-text card-body-text">{this.props.description}</p>
                        </div>
                    </div>
                </Link>
            </>
         );
    }
}
 
export default Card;
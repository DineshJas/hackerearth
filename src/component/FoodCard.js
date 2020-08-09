import React, { Component } from 'react';
import like from '../asserts/Assets/Icons/Icon feather-heart-color.png';
import unlike from '../asserts/Assets/Icons/Icon feather-heart.png';
import history from '../configuration/history'
import { Link } from 'react-router-dom';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isHovering: false,
            customStyleBg: {},
            cardEven: false,
         }
    }

    componentDidMount() {
        this.creatingStyle()
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
    return {
        isHovering: !state.isHovering,
        };
    }

    creatingStyle = () => {
        if(this.props.id % 2 == 0) {
            let temp = {
                backgroundColor: '#000',
                color: '#fff',
            }
            this.setState({customStyleBg: temp, cardEven: true});
        } else {
            let temp = {
                backgroundColor: '#fff',
                color: '#000',
            }
            this.setState({customStyleBg: temp});
        }
    }

    render() { 
        return ( 
            <>
                <Link to={{ pathname: `/${this.props.id}`, state: {foodName: this.props.name, foodImage: this.props.imageSrc}}} style={{textDecoration: "none"}}>
                    <div className="card" onMouseEnter={() => {this.handleMouseHover()}} onMouseLeave={() => {this.handleMouseHover()}} style={this.state.customStyleBg}>
                        {!this.state.isHovering ?  
                        <>
                        {
                        this.props.label ? <span className="recipe-label">{this.props.label}</span>
                        : ''
                        }
                        <img className="card-img-top" src={this.props.imageSrc} alt="food_image" />
                        <div className="card-body text-left" >
                            <div className="d-flex justify-content-between">
                                <h3 className="card-title">{this.props.name}</h3>
                                {this.state.cardEven ? 
                                    <img className="like-img-size" src={like} alt="like" /> :
                                    <img className="like-img-size" src={unlike} alt="like" />
                                }
                                
                            </div>
                            <p style={{fontSize: "16px"}}>$<span className="mr-3"> {this.props.price}</span></p>
                            <p className="card-text card-body-text">{this.props.description}</p>
                        </div>
                        </> :
                            <>
                                <div className="middle-content">
                                    <div style={customStyle}>VIEW MORE</div>
                                    <br />
                                    <div style={customStyle}>QUICK VIEW</div>
                                </div>
                            </>
                        }
                    </div>
                </Link>
            </>
         );
    }
}

const customStyle = {
    backgroundColor: '#071515',
    borderColor: 'white',
    color: 'white',
    fontSize: '16px',
    padding: '16px 32px',
    margin: '20px',
    borderRadius: '10px',
    opacity: '0.6',
}
 
export default Card;
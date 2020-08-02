import React, { Component } from "react";
import heart from '../asserts/Assets/Icons/Icon feather-heart-color.png';
import { Link } from "react-router-dom";
import searchImage from "../asserts/Assets/Icons/Icon feather-search.png";

class FoodDescription extends Component{
    constructor(props){
        super(props)
        this.state={
            comment:''
        }       
    }

    handleComment = (event) => {
     this.setState({comment: event.target.value})
    }
   
    render(){
        return (
            <div className="content mx-auto h-full">
             <div className="flex content-center items-center justify-center h-full">
               <div className="wrap">
                 <div className="search">
                   <button type="submit" className="searchButton" disabled>
                   <img src={searchImage} /> 
                   </button>
                   <input type="text" className="searchTerm" placeholder="Search your favourite recipe "  />
                 </div>
               </div>
               <Link to={"/"} className="go-back" style={{textDecoration: "none", color: "black"}}>
                    <i class="fas fa-arrow-circle-left"></i>
                    <span style={{fontSize: "12px", marginLeft: "10px"}}>Go back</span>
               </Link>
               <div className="my-5">
                 <table>
                   <tbody>
                     <td style={{padding: "10px"}}>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/PZ4pctQMdg4"frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" style={{bordeRadius: "15px"}}>
                   </iframe>
                   <h5>Ingredients:</h5>
                   <p style={{fontSize:"13px"}} > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                   <h5>How to prepare:</h5>
                   <p style={{fontSize:"13px"}}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    <br />
                    <br /> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    <br />
                    <br /> 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                     </td>
                     <td style={{padding: "10px", textAlign: "right"}}>
                       <div className="detail-heading">
                         <span className="category">RECIPE</span>
                         <h1>{this.props.location && this.props.location.state && this.props.location.state.foodName ?
                            this.props.location.state.foodName : "Food Name"}</h1>
                       </div>
                       <div className="rating">
                         <span className="rate">4/5</span>
                         <div >
                          <i class="fas fa-star "></i>
                          <i class="fas fa-star "></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fa fa-star "></i>
                         </div>
                       </div>
                       <span className="category my-2">DESCRIPTION</span>
                       <p style={{fontSize:"13px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                     <div className="rating">
                       <div className="circle">
                         <span>8</span>
                         <p style={{fontSize: "10px"}}>Ingredients</p>
                       </div>
                       <div className="circle">
                         <span>8</span>
                         <p style={{fontSize: "10px"}}>Ingredients</p>
                       </div>
                       <div className="circle">
                         <span>8</span>
                         <p style={{fontSize: "10px"}}>Ingredients</p>
                       </div>
                     </div>
                     <h4 className="my-10">FAVOURITE THIS ITEM
                     <img src={heart}></img></h4>
                     <hr/>
                     <span className="comment my-2">ADD COMMENTS</span>
                     <textarea rows={7} style={{width: "100%"}} onChange={(e)=>this.handleComment(e)}></textarea>
                     <button className="comment-btn" onClick={()=>{alert(this.state.comment)}}>ADD COMMENT</button>
                     </td>
                   </tbody>
                 </table>
               </div>
             </div>     
            </div>
          );
    }

}
export default FoodDescription;
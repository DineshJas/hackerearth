import React, {Component} from 'react';
import '../asserts/App.css';
import Card from './FoodCard';
import {getFoodList} from '../configuration/Api';
import image1 from '../asserts/Assets/Images/Illustration1.png';
import image2 from '../asserts/Assets/Images/Illustration2.png';
import searchImage from "../asserts/Assets/Icons/Icon feather-search.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      foodList: [],
      filteredFoodList: [],
      searchText: '',
     }
  }

  componentDidMount(){
    getFoodList((foodList) => {
      this.setState({foodList})
    });
  }

  searchRecipe = (event) => {
    this.setState({ searchText: event.target.value });
    let recipes = this.state.foodList;
    let filteredFoodList =
      recipes.length &&
      recipes.filter(
        (data) =>
          JSON.stringify(data)
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) !== -1
      );
    this.setState({ filteredFoodList });
  };

  render() { 
    return ( 
        <div className="App">
          <header className="App-header">
            <div className="container">
              <div className="d-flex align-items-start">
              <button type="submit" className="searchButton" disabled>
                   {/* <i class="fas fa-search"></i> */}
                   <img src={searchImage} />
              </button>
               <input 
               type="text" 
               className="searchTerm" 
               placeholder="Search your favourite recipe " 
               onChange={(e) => this.searchRecipe(e)} 
               value={this.state.searchText} 
               />
              </div>
              <div style={{color: 'black'}}>
                <div className="text-right">
                  <p style={{marginBottom: "0px", color: '#887272', fontSize: '12px'}}>CATEGORY</p>
                </div>
                <div className="text-right">
                <h2>Main & Appetizer</h2>
                </div>
              </div>
              <div className="grid-system">
              {
                this.state.filteredFoodList.length 
                ? this.state.filteredFoodList.map((foodObj, index) => {
                  return <Card 
                    key={foodObj.id}
                    imageSrc={foodObj.image} 
                    label={foodObj.label} 
                    description={foodObj.description} 
                    name={foodObj.name} 
                    price={foodObj.price} 
                    id={foodObj.id}
                  />
                }) 
                : this.state.foodList.map((foodObj, index) => {
                  return <Card 
                    key={foodObj.id}
                    imageSrc={foodObj.image} 
                    label={foodObj.label} 
                    description={foodObj.description} 
                    name={foodObj.name} 
                    price={foodObj.price} 
                    id={foodObj.id}
                  />
                }) 
            }
              </div>
            </div>
            
            {/* <div className="card">
                <img className="card-img-top" src="https://i.imgur.com/tDnjTXf.jpg" alt="food_image" />
                <div className="card-body text-left" style={{color: 'black'}}>
                  <div className="d-flex justify-content-between">
                    <h3 className="card-title">Rose breasted Grosbeak chicken</h3>
                    <img className="like-img-size" src={unlike} alt="like" />
                  </div>
                  <p style={{fontSize: "16px"}}>$<span className="mr-3"> 4.99 </span></p>
                  <p className="card-text card-body-text">A unique combination of Indian Uthappam (pancake) and Italian pizza</p>
                </div>
            </div> */}
          </header>
        </div>
     );
  }
}
 
export default App;
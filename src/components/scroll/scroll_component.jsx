//this is where it houses all the logic, no need for any other components
//although I still think it's smarter to break out the component
//will probably need to account for props 
import React from 'react';
import { ProductsList } from '../all_prods/all_products_component';
import logo from './logo.svg'
import './scroll_component.scss';

class Scroll extends React.Component {
    constructor() {
        super();

        this.state = {
            products: [],
            page: 1,
        };
    }
    
    componentDidMount() {
        this.loadData();
        this.addScrollEvent();
    }

     //this function will fetch the data, then set state.prod
    loadData = () => {
        fetch(`https://summersalt.com/collections/swimwear/products.json?page=${this.state.page}&limit=10`)
            .then(response => response.json())
            //use the spread operator to append new data to the prev state (to preserve products from "prev page")
            .then(data => this.setState( { products: [...this.state.products, ...Object.values(data)[0]] } ));
    }

    //adds an event listener "scroll" and triggers handleScroll
    addScrollEvent = () => {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight) {
            this.loadMore();
        }
    }

    //this function will increment state.page so it can fetch a new set of data
    //use callback function to call loadData so that it can fetch new data
    loadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }), this.loadData)
    };

    //map through the items we get back from fetching the JSON data, and return it as a grid
    render() { 
        return (
            <>
            <div className="logo-container">
                <img src={logo} alt="Summersalt Logo" id="logo" />
            </div>
            <ProductsList products={this.state.products} />
            </>
        );
    };

}

export default Scroll;
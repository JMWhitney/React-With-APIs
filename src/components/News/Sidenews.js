import React, { Component } from 'react';
import axios from 'axios';
import SingleSide from './SingleSide';
import Error from './Error';

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
            error: false
        };
    }

    componentDidMount() {
        const url = (`https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=3c5c8f726f4f4d87a352e63017c68eb0`);

        //This is how to do a post request with axios
        // axios.post(url, {
        //     data: {
        //         news: {
        //             title: 'asdadasd',
        //             description: 'asnaslda'
        //         }
        //     }
        // })

        axios.get(url)
            .then((response) => {
                this.setState({
                    sidenews: response.data.articles
                })
            })
            .catch((error) => {
                this.setState({
                    error: true
                })
            });

    }

    renderItems() {
        if (!this.state.error) {
            return this.state.sidenews.map((item) => (
                //If you are iterating through an array of react components
                //each component needs a unique key
                <SingleSide key={item.url} item={item} />
            ))
        } else {
            return <Error />
        }
    }

    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default Sidenews;

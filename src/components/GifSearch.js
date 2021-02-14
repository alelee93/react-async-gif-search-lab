//import { Button } from 'bootstrap'
import React from 'react'
//import GifListContainer from '.containers/GifListContainer'

export default class GifSearch extends React.Component {
    state={
        search : ''
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSearch(this.state.search)
    }

    render(){
       return(
           <form onSubmit={this.handleSubmit}>
            
                <h1>GifSearchComponent</h1>
                <div className="input group">
                    <input
                        type="text"
                        className="form-control"
                        name="search"
                        placeholder="search for gifs"
                        onChange={this.handleChange}
                        value={this.state.search}
                    />
                
                </div>
                <input type="submit" name="Submit" className="btn btn-primary"/>
            </form>
       )
    }

}
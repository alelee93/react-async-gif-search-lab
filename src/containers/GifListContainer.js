
import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            gifs: []
        }
    }

    handleSearch = (query) => {
        const API_KEY = 'LKarLnbYwfq3ezQo7Rb2yeU2A3eCkvLC'
        const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g`
        fetch(url)
        .then(res => res.json())
        .then(gifsData => {
            const gifs = gifsData.data.slice(0,3).map(gif => {
                return {title: gif.title, id: gif.id, url: gif.images.original.url}
            })
            this.setState({ gifs: gifs})
           // debugger
        })
    }

    // getGifs(){
    //     const API_KEY = 'LKarLnbYwfq3ezQo7Rb2yeU2A3eCkvLC'
    //     fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${API_KEY}&rating=g`)
    //         .then(res => res.json())
    //         .then(data => {
    //             // data.map(giff => this.setState({
    //             //     giffList: [...giff.images.original.url]
    //             console.log(data)
            
    //         })
    // }

    // handleSubmit(){
    //     //handleSubmit function passed down to GifSearch a prop
    // }

    render(){
        return(
            <div>
                <h1>GifListContainer</h1>
                <GifSearch handleSearch={this.handleSearch}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    
}

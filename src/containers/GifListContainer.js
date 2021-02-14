
import React from 'react'

export default class GifListContainer extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            giffList: []
        }
    }

    getGifs(){
        const API_KEY = 'LKarLnbYwfq3ezQo7Rb2yeU2A3eCkvLC'
        fetch(`https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=${API_KEY}&rating=g`)
            .then(res => res.json())
            .then(data => {
                data.map(giff => this.setState({
                    giffList: [...giff.images.original.url]
                }))
            })
    }

    handleSubmit(){
        //handleSubmit function passed down to GifSearch a prop
    }

    render(){
        <div>
            <GifSearch submitFn = {this.handleSubmit()}/>
            <GifList giffs = {this.props.giffList}/>
        </div>
    }

    
}

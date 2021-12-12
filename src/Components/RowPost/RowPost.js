import React from 'react'
import YouTube from 'react-youtube'
import "./RowPost.css"
import { useEffect, useState } from "react"
import axios from 'axios'
import { API_KEY, imageUrl } from '../Constants/Constants'

function RowPost(props) {
    const [movies, setmovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then (response=>{
            console.log(response.data)
            setmovies(response.data.results)
        }).catch(err=>{
          //  alert('Network Error')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };
    const handleMovie = (id)=>{
        console.log(id)
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.lenght!==0){
                setUrlId(response.data.results[0])
            }
            else{
                console.log('Trailer Not Available')
            }

        })
    }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':"poster"} src= {`${imageUrl+obj.backdrop_path}`}/>
                )}
                
            </div>
            { urlId && <YouTube opts={opts} videoId={urlId.key} /> }
        </div>
    )
}

export default RowPost

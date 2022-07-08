import './banner.styles.css';
import {Button} from '../../components/custom-button/custom-button.component'
import { useEffect,useState} from 'react';
import { requests } from '../../utils/api/requests';
export const Banner = () => {
    const [movie,setMovie] = useState([])
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch(requests.fetchNetflixOriginals);

                const data = await response.json();

                const {results} = data;
    
                setMovie(
                results[Math.floor(Math.random() * results.length - 1)]
                )

                return response;
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[]);
    const {backdrop_path,name,overview} = movie;
    const truncate = (string,n) => {
            return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }
    return(
        <div className='banner' style={
            {
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "top center",
                backgroundRepeat: "no-repeat"
            }
        }>
        <div className='banner-contents'>
            <h1 className='banner-title'>
            {name}</h1>
            <div className='banner-buttons'>
                <Button buttonType="bannerButton">Play</Button>
                <Button buttonType="bannerButton">My List</Button>
            </div>
            <div className='banner-description'>
                {
                    truncate(overview, 150)
                }
            </div>
        </div>
        <div className='banner-fade-bottom'/>
        </div>
    )
}
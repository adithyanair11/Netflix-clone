import { requests } from "../../utils/api/requests"
import { Category } from "../category/category.component";
import './categories-preview.styles.css';

export const CategoriesPreview = () => {
    return (
        <div className="categories-preview">
            <Category title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
            <Category title="TRENDING" fetchUrl={requests.fetchTrending}/>
            <Category title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
            <Category title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies}/>
            <Category title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies}/>
            <Category title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies}/>
            <Category title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies}/>
            <Category title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
        </div>
    )
}
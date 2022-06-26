import './home.styles.css';
import {Outlet} from 'react-router-dom'
import { Banner } from '../../components/banner/banner.component';
import { CategoriesPreview } from '../../components/categories-preview/categories-preview.component';
export const Home = () => {
    return(
        <div className='home'>
            <Outlet/>
            <Banner />
            <CategoriesPreview />
        </div>
    )
}
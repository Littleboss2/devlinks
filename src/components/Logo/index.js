
import './logo.css'

import { Link } from 'react-router-dom'

export function Logo(){
    return(
        <Link to={"/"}>
        <h1 className='logo'><span>Little</span><span className='logo-text'>Boss</span></h1>
        </Link>
    )
}
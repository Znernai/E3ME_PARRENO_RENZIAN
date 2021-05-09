import {Link} from 'react-router-dom'

const Nav = ({user}) => {
    const alertNotice = () => (alert(`Hello  ${user}`))
    return (
        <nav>
        <ul class="nav-links">
            <Link to = '/' className= 'link' > 
            <li>Home</li>
            </Link>
            <Link to = '/about' className= 'link' > 
            <li>About</li>
            </Link>
            <Link to = '/world' className= 'link' > 
            <li>World</li>
            </Link>
            <Link to = '/technology' className= 'link' > 
            <li>Technology</li>
            </Link>
            <Link to = '/culture' className= 'link' > 
            <li>Culture</li>
            </Link>
            <Link to = '/health' className= 'link' > 
            <li>Health</li>
            </Link>   
            <Link to = '/archives' className= 'link' > 
            <li>Archives</li>
            </Link>     
            <li className="user" onClick={alertNotice}> 
            <span>{user}</span>
           
            </li>
        </ul>
    </nav>
    )
}

export default Nav

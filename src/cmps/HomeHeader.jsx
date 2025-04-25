import { NavLink } from "react-router"
import GIcon from "./GIcon"
// import logo from '../../assets/svgs/logo.svg'

export function HomeHeader() {


    return (
        <header className="home-header ">

                <GIcon iconName="Logo" />
                {/* <img className="logo" src={logo} alt="logo" srcset="" /> */}
               <NavLink to={'/story/dashboard'}/>
                <span>home page header here</span>
        </header>
    )
}
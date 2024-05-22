import SearchBar from "../searchBar/searchBar"
import "./header.css";

export default function Header(){
    return(
        <div className="container-header">
            <img src="Logo.svg" className="logo"></img>
            <SearchBar className="pesquisa"/>
        </div>
    )
}
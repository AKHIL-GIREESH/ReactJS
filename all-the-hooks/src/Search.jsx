const Search = ({onChange}) => {
    console.log("Search")
    return (
            <input type="text" placeholder="Search" onChange={e => onChange(e.target.value)}/>
    )
}

export default Search
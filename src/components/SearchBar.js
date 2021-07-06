

const SearchBar = ({keyword,setKeyword}) => {
    return (
        <div style={wrapperStyle} className="searchbar-wrapper">
            <form action="/" method="get">
                <input 
                    type="text"
                    style={searchStyle}
                    key="header-search" 
                    value={keyword} 
                    placeholder={"Search IP"} 
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button style={buttonStyle} type="submit">
                    <div className="submit-text">></div>
                </button>
            </form>
        </div>
    )
}

const searchStyle = {
    width:"15rem",
    border:"none",
    padding:"0.5rem", 
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
    height: "35px"
};

const buttonStyle = {
    border:"none", 
    padding:"0.5rem",
    borderBottomRightRadius: "8px",
    borderTopRightRadius: "8px",
    height: "51px",
    width: "50px",
    background: "black",
    color: "white"
}

const wrapperStyle = {
    display: "flex",
    alignItems: "stretch",
    alignContent: "center",
    justifyContent: "center",
    width: "100%"
}


export default SearchBar

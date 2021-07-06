

const Results = () => {
    return (
        <div style={resultWrapperStyles}>
            <div style={infoHead}>IP ADDRESS</div>
            <div style={infoBody}>IP ADDRESS</div>
            <div style={infoHead}>LOCATION</div>
            <div style={infoBody}>LOCATION</div>
            <div style={infoHead}>TIMEZONE</div>
            <div style={infoBody}>TIMEZONE</div>
            <div style={infoHead}>ISP</div>
            <div style={infoBody}>ISP</div>
        </div>
    )
}

const resultWrapperStyles = {
    width: "70%",
    position: "absolute",
    zIndex: "401",
    background: "white",
    color: "white",
    top: "23%",
    left: "15%",
    borderRadius: "8px",
    display: "grid"
};

const infoHead = {
    color: "hsl(0, 0%, 17%)",
    textAlign: "center",
    height: "10%",
    fontSize: "0.7em",
    padding: "2%"
}

const infoBody = {
    color: "black",
    textAlign: "center",
    fontWeight: "bold"
}

export default Results

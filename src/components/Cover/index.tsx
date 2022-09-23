const Cover = (): JSX.Element => {

    const styles = {
        title: {
            display: "flex",
            FlexDirection: "row",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
        },
        images: {
            
        },
        content: {
            paddingBottom: "10vh",
            justifyContent: "center",
            width: "100vw"
        }
    }

    return (
        <div style={styles.title}>
            <div>
            </div>
            <div style={{...styles.content, textAlign: "center"}}>
                <h2>Kunanon Chankanasuk</h2>
                Hi! there &nbsp;👋🏻<br />
                I’m a Full Stack Developer <br />
                current at Gosoft based on Bangkok 📍
            </div>
        </div>
    )
}

export default Cover;
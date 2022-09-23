import { linkIn, email, github } from "../../images";


const styles = {
    extensive: {
        display: "flex",
        justifyContent: "center",
        gap: "45px",
        padding: "3vh 0 5vh 0"
    },
    images: {
        height: "auto",
        maxWidth: "25px"
    }
}

const Footer = (): JSX.Element => {
    return (
        <div style={styles.extensive}>
            <img style={styles.images} onClick={() =>
                window.open("https://www.linkedin.com/in/kunanon-chankanasuk-0861709a/")}
                src={linkIn}
                alt="linkIn"
            />
            <img style={styles.images} onClick={() =>
                window.open("https://github.com/zeyasE")}
                src={github}
                alt="github" 
            />
            <img style={styles.images}
                onClick={() => window.open('mailto: kunanon.ze@gmail.com', '_self')} 
                src={email} 
                alt="email" 
            />
        </div>
    )
}

export default Footer;
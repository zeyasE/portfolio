import { Button } from "antd";
import { resume } from "../../images";

const Resume = (): JSX.Element => {
    const styles = {
        extensive: {
            display: "flex",
            alignItems: "center",
            padding: "5vh 0 5vh 0",
            backgroundColor: "white"
        },
        images: { 
            width: "80vw", 
            maxWidth: "600px", 
            padding: "0 0 5vh 0" 
        }
    }

    return (
        <div style={{...styles.extensive, flexDirection: "column",}}>
            <h2><b>Resume</b></h2>
            <img style={styles.images} src={resume} alt="resume" />
            <Button href={resume} download="Kunanon_Resume" target="_blank" shape="round">Download Resume</Button>
        </div>
    )
}

export default Resume;
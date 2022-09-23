import { gosoft, manpow } from "../../images";

const Work = (): JSX.Element => {
    const styles = {
        extensive: {
            display: "flex",
            padding: "10vh 0",
            justifyContent: "center",
            alignItems: "center",
        },
        content: {
            display: "flex",
            justifyContent: "center",
            // margin: "15px",
            // color: "white"
        },
        images: {
            margin: "20px",
            height: "100px",
        }
    }

    return (
        <div style={{ ...styles.extensive, flexDirection: "column" }}>
            <h2 style={{ textAlign: "center" }}><b>Project</b></h2>
            <div>

            </div>
            <h2 style={{ textAlign: "center" }}><b>Work at</b></h2>
            <div>
            <img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={manpow} />
            <img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={gosoft} />
            </div>

        </div>
    )
}

export default Work;
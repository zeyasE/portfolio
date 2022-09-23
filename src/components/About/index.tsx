import { Tooltip } from "antd";
import * as images from "../../images";

const About = (): JSX.Element => {

    const styles = {
        extensive: {
            display: "flex",
            padding: "10vh 0",
            justifyContent: "center",
            alignItems: "center",
            // height: "100vh"
        },
        techStack: {
            display: "flex",
        },
        techStackCol: {
            // width: "125px",
            backgroundColor: "black",
            color: "white"
        },
        techStackRow: {
            display: "flex",
            justifyContent: "center",
            margin: "15px",
            color: "white"
        },
        images: {
            margin: "20px",
            height: "50px",
        }
    }

    // const position = [
    //     { FRONTEND: { 0: images.react } },
    //     { BACKEND: { 0: images.nodejs, 1: images.koa, 2: images.express, 3: images.postgres, 4: images.typeorm } },
    //     { LANGUAGES: { 0: images.js, 1: images.cplus } },
    //     { CLOUD: { 0: images.aws } }
    // ]

    const LogoRow = ({ Component, name }: { Component: JSX.Element, name: string }): JSX.Element => {
        return (
            <Tooltip color="blue" placement="top" title={name}>
                <div children={Component} />
            </Tooltip>
        )
    }

    return (
        <div style={{...styles.extensive, flexDirection: "column"}}>
            <h2 style={{ textAlign: "center" }}><b>About</b></h2>
            <div style={{width: "60vw", maxWidth: "600px", textAlign: "left"}}>
                Hello!!!, I graduaged 🎓&nbsp;from Computer Engineering at Kasetsart University 🏫. I interest in Full Stack Developer. It comes from doing a few projects in class. My main expertise lies in Front end and some function in Back end. In addition I like to learn new technologies in various fields.
            </div>
            <br />
            <h3 style={{ textAlign: "center" }}><b>Technologies that I Worked</b></h3>
            <div style={{ justifyContent: "center" }}>
                {/* {position.map((result) => {console.log(result); return (
                    <>
                        <div style={{ ...styles.techStackCol, textAlign: "center" }}>{Object.keys(result)}</div>
                        <div>{Object.values(result).map((value, index) => {console.log("value", value[index], typeof value); return(
                            <>ƒ
                            <img style={{...styles.images, objectFit: "contain"}} alt="logo" src={value[index]} />
                            </>
                        )}
                        )}</div>
                    </>
                )})} */}
                <div style={{ ...styles.techStackCol, textAlign: "center" }}>FRONTEND</div>
                <div style={{ ...styles.techStackRow, flexWrap: "wrap" }}>
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={images.react} />}
                        name="React"
                    />
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={images.antd} />
                        }
                        name="Antd"
                    />
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={images.htmlcss} />
                        }
                        name="HTML&CSS"
                    />
                </div>
                <div style={{ ...styles.techStackCol, textAlign: "center" }}>BACKEND</div>
                <div style={{ ...styles.techStackRow, flexWrap: "wrap" }}>
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={images.nodejs} />
                        }
                        name="NodeJS"
                    />
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={images.koa} />
                        }
                        name="Koa"
                    />
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={images.express} />
                        }
                        name="Express"
                    />
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={images.postgres} />
                        }
                        name="Postgres"
                    />
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={images.mongodb} />
                        }
                        name="MongoDb"
                    />
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={images.typeorm} />
                        }
                        name="Typeorm"
                    />
                </div>
                <div style={{ ...styles.techStackCol, textAlign: "center" }}>LANGUAGES</div>
                <div style={{ ...styles.techStackRow, flexWrap: "wrap" }}>
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={images.js} />
                        }
                        name="JavaScript"
                    />
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={images.cplus} />
                        }
                        name="C++"
                    />
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "contain" }} alt="logo" src={images.python} />
                        }
                        name="Python"
                    />
                </div>
                <div style={{ ...styles.techStackCol, textAlign: "center" }}>OTHER</div>
                <div style={{ ...styles.techStackRow, flexWrap: "wrap" }}>
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "fill" }} alt="logo" src={images.docker} />
                        }
                        name="Docker"
                    />
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "fill" }} alt="logo" src={images.github} />
                        }
                        name="Github"
                    />
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "fill" }} alt="logo" src={images.gitlab} />
                        }
                        name="Gitlab"
                    />
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "fill" }} alt="logo" src={images.git} />
                        }
                        name="Git"
                    />
                    <LogoRow
                        Component={<img style={{ ...styles.images, objectFit: "fill" }} alt="logo" src={images.aws} />
                        }
                        name="Aws"
                    />                </div>

            </div>
        </div>
    );
}

export default About;
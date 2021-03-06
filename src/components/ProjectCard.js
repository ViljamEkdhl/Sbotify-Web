import { Card, Typography } from "@mui/material";
import GithubSvg from "./GithubSvg";

function ProjectCard(props) {
    return ( 
        <Card
        style={{
            width: "20%",
            height: "60%",
            padding: "20px 20px 40px 20px",
            margin: "20px 20px 40px 20px",
            alignContent: "center"
        }}
        >
            <Typography align="center">Sbotify</Typography>

            <img src={require('../images/sbotify.png')} />

            <GithubSvg/>
        </Card>
     );
}

export default ProjectCard;
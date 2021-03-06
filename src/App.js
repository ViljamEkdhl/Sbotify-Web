import React from "react";
import TopBar from "./components/TopBar";
import background from "./images/background.jpg";
import {Parallax, ParallaxLayer } from "@react-spring/parallax"
import ProjectCard from "./components/ProjectCard";
import {IconButton} from "@mui/material"

function App() {
	
	return (

		<Parallax pages={2}>

			<ParallaxLayer 
				speed={2.5}
				factor={1}
				style={{
					backgroundColor: "white",
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					color: 'white',
				}}>
				
				<ParallaxLayer className="top-bar">
					<TopBar/>
				</ParallaxLayer>

				<h1 className="main-title">SBOTIFY</h1>
				

			</ParallaxLayer>


			<ParallaxLayer
			offset={1}
			speed={0.5}
			style={{
				display: 'inline-flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
				alignItems: 'center',
				color: 'white',
				backgroundColor: '#22A377',
			}}>

				<ProjectCard/>
				<ProjectCard/>
				<ProjectCard/>
			</ParallaxLayer>

		</Parallax>
	);
}


export default App;

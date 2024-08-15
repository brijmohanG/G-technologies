import { Component } from "react"
import "./index.css"

class Bottom extends Component {
    render() {
        return (
            <div className="bottom-bg-container">
                <div>
                    <h1>Hire Dedicated Developers</h1>
                    <ul>
                        <li>Hire ReactJS Developers</li>
                        <li>Hire NodeJS Developers</li>
                        <li>Hire NestJS Developers</li>
                        <li>Hire ExpressJS Developers</li>
                        <li>Hire JavaScript Development</li>
                        <li>Hire PHP Developers</li>
                        <li>Hire Python Developers</li>
                    </ul>
                </div>
                <div className="wave-footer">
                    <svg
                        className="wave"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 320"
                    >
                        <path
                            fill="#0099ff"
                            fillOpacity="0"
                            d="M0,96L80,122.7C160,149,320,203,480,197.3C640,192,800,128,960,112C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                        ></path>
                    </svg>
                </div>
            </div>
        )
    }
}

export default Bottom
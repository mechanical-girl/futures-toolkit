import * as React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import './pathway.css';


// Required to make webpack let us use images
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
const images = importAll(require.context('./../../assets/images', false, /.*\.(png|jpe?g|svg)$/));

const ToolList = (tools) => {
    let tool_list = []
    for (let tool in tools) {
        console.log(tools[tool])
        tool_list.push(tools[tool])
        tool_list.push(", ")
    }
    console.log(tool_list)

    return (tool_list.slice(0, tool_list.length - 1))
}

const PathwayImage = ({ tools }) => (
    <div className="container pathway-image float-start" style={{ width: '50%' }}>
        <div className="row">
            <div className="col pathway-image-col d-flex align-items-center">
                <span>
                    <img src={images['horizon-scan-logo.png']} alt="Horizon Scan" />
                    <img src={images['seven-questions-inactive.png']} alt="7 Questions" />
                    <img src={images['the-issues-paper-inactive.png']} alt="The Issues Paper" />
                    <img src={images['delphi-inactive.png']} alt="Delphi" />
                </span>
            </div>
            <div className="col pathway-image-col d-flex align-items-center">
                <span>
                    <img src={images['driver-mapping-logo.png']} alt="Driver Mapping" />
                    <img src={images['axes-of-uncertainty-inactive.png']} alt="Axes of Uncertainty" />
                </span>
            </div>
            <div className="col pathway-image-col d-flex align-items-center">
                <span>
                    <img src={images['scenarios-inactive.png']} alt="Scenarios" />
                </span>
            </div>
            <div className="col pathway-image-col d-flex align-items-center">
                <span>
                    <img src={images['visioning-logo.png']} alt="Visioning" />
                    <img src={images['swot-inactive.png']} alt="SWOT" />
                </span>
            </div>
            <div className="col pathway-image-col d-flex align-items-center">
                <span>
                    <img src={images['policy-stress-testing-inactive.png']} alt="Policy Stress-testing" />
                    <img src={images['backcasting-inactive.png']} alt="Backcasting" />
                    <img src={images['roadmapping-inactive.png']} alt="Roadmapping" />
                </span>
            </div>
        </div>
    </div>
)


const Pathway = ({ pathway, handleClick }) => {
    return (
        <div className="container pathway">
            <div className="row">
                <div className="col text-center">
                    <h3>{pathway.title}</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-2 pathway-left-column">
                    Business Need:
                </div>
                <div className="col-10 pathway-right-column">
                    {parse(pathway.business_need)}
                </div>
            </div>
            <div className="row">
                <div className="col-2 pathway-left-column">
                    Aim:
                </div>
                <div className="col-10 pathway-right-column">
                    {parse(pathway.aim)}
                    <PathwayImage
                        tools={pathway.tools}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-2 pathway-left-column">
                    Primary Activities:
                </div>
                <div className="col-10 pathway-right-column">
                    {parse(pathway.primary_activities)}
                </div>
            </div>
            <div className="row">
                <div className="col-2 pathway-left-column">
                    Tools:
                </div>
                <div className="col-10 pathway-right-column">
                    {ToolList(pathway.tools)}
                </div>
            </div>
            <div className="row">
                <div className="col-2 pathway-left-column">
                    Participants:
                </div>
                <div className="col-10 pathway-right-column">
                    {parse(pathway.participants)}
                </div>
            </div>
            <div className="row">
                <div className="col-2 pathway-left-column">
                    Timing:
                </div>
                <div className="col-10 pathway-right-column">
                    {parse(pathway.timing)}
                </div>
            </div>
            <div className="row">
                <div className="col-2 pathway-left-column">
                    The Approach:
                </div>
                <div className="col-10 pathway-right-column">
                    {parse(pathway.approach)}
                </div>
            </div>
            <div className="row">
                <div className="col-2 pathway-left-column">
                    Output:
                </div>
                <div className="col-10 pathway-right-column">
                    {parse(pathway.output)}
                </div>
            </div>
            <div className="row">
                <div className="col-12 float-end">
                    <span className="float-end pathway-start" id="pathway-start" onClick={handleClick}>
                        Get Started >
                    </span>
                </div>
            </div>
        </div>
    )
};

export { Pathway };
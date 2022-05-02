import * as React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const ToolList = (tools, state) => {
    let tool_list = []
    for (let tool in tools) {
        tool_list.push(<Link to={{
            pathname: `${tools[tool].replace(/\s+/g, '').toLowerCase()}`,
            state: state
        }} > {tools[tool]}</ Link>)
        tool_list.push(" ")
    }
    return (tool_list)
}

const Pathway = ({ pathway }) => {
    return (
        <div className="container pathway">
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

        </div>
    )
};

export { Pathway };
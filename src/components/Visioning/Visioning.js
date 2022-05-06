import * as React from 'react';
import { BoxRow } from '../BoxRow/BoxRow.js';
import { ScanModal } from '../Modal/ScanModal.js';

import "../App/App.css";

import LogoVisioning from '../../assets/images/visioning-logo.png'

const Visioning = ({ scans, handleClick, setScans, modalShow, modalHandleClose, modalThisScan }) => {
    for (let i in scans) {
        if (!scans[i]["title"].endsWith(")")) {
            scans[i]["title"] = scans[i]["title"] + " (" + scans[i]["horizontal"] + ", " + scans[i]["vertical"] + ")";
        }
    }
    return (
        <div className="container m" >
            <div className="row">
                <div className="col text-center h2">
                    <img src={LogoVisioning} />
                    <span>Visioning</span>
                </div>
            </div>
            <div className="row">
                <div className="col col-6">
                    <h4>Describe the vision of success</h4>
                    <p>Imagine you are members of the team that has successfully delivered the policy or strategy being discussed. You should describe what that means to you and what success looks like.</p>
                    <ol>
                        <li>What have we achieved?</li>
                        <textarea style={{ width: "70%", height: "100px" }} />
                        <li>Who are our stakeholders? How have they benefited from what we’ve done?</li>
                        <textarea style={{ width: "70%", height: "100px" }} />
                        <li>What are we most pleased about?</li>
                        <textarea style={{ width: "70%", height: "100px" }} />
                        <li>What arrangements (procedures, structures or decision making processes) have we put in place to make sure the project is sustained?</li>
                        <textarea style={{ width: "70%", height: "100px" }} />
                        <li>How are we measuring progress and success?</li>
                        <textarea style={{ width: "70%", height: "100px" }} />
                        <li>Is there anything we still need to tackle?</li>
                        <textarea style={{ width: "70%", height: "100px" }} />
                        <li>What are the challenges we face now?</li>
                        <textarea style={{ width: "70%", height: "100px" }} />
                        <li>What have we learned from our successes and failures?</li>
                        <textarea style={{ width: "70%", height: "100px" }} />
                    </ol>
                </div>
                <div className="col col-6">
                    <ScanModal
                        show={modalShow}
                        handleClose={modalHandleClose}
                        scan={modalThisScan}
                    />
                    <BoxRow
                        items={scans}
                        type="scan"
                        onClick={handleClick}
                    />
                </div>
            </div>
        </div>
    )
}

export { Visioning };
import * as React from 'react';
import { BoxRow } from '../BoxRow/BoxRow.js';
import { ScanModal } from '../Modal/ScanModal.js';

import LogoHorizonScan from '../../assets/images/horizon-scan-logo.png'
import LogoDriverMapping from '../../assets/images/driver-mapping-logo.png'

import '../Modal/modal.css';

const HorizonScanning = ({ scans, handleClick, setScans, modalShow, modalHandleClose, modalThisScan }) => {
    const [scanTitle, setScanTitle] = React.useState('');
    const [scanDescription, setScanDescription] = React.useState('');
    const [scanBody, setScanBody] = React.useState('');

    const handleScanTitleChange = (e) => {
        setScanTitle(e.target.value);
    }

    const handleScanDescriptionChange = (e) => {
        setScanDescription(e.target.value);
    }

    const handleScanBodyChange = (e) => {
        setScanBody(e.target.value);
    }

    const newScan = event => {
        event.preventDefault();
        let thisScan = {
            "id": scans.length,
            "type": "scan",
            "title": scanTitle,
            "blurb": scanDescription,
            "body": scanBody,
        }
        scans.push(thisScan);
        setScans(scans);
        handleClick(event);
        setScanTitle('');
        setScanDescription('');
        setScanBody('');
    }

    return (
        <div className="container m" >
            <ScanModal
                show={modalShow}
                handleClose={modalHandleClose}
                scan={modalThisScan}
            />
            <div className="row">
                <div className="col text-center h2">
                    <img src={LogoHorizonScan} />
                    <span>Horizon Scanning</span>
                </div>
            </div>
            <div className="row">
                <div className="col col-6">
                    <BoxRow
                        items={scans}
                        type="scan"
                        onClick={handleClick}
                    />
                </div>
                <div className="col col-6">
                    <form onSubmit={newScan} id="add-new-scan">
                        <div className="row">
                            <div className="col-4">
                                <label>Scan Title:</label>
                            </div>
                            <div className="col">
                                <input type="text" onChange={handleScanTitleChange} value={scanTitle} style={{ width: "100%", display: "block" }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <label>Scan Description:</label>
                            </div>
                            <div className="col">
                                <input type="text" onChange={handleScanDescriptionChange} value={scanDescription} style={{ width: "100%", display: "block" }} />
                            </div>
                        </div>

                        <div className="row">
                            <label>Scan Report:</label>
                        </div>
                        <div className="row">
                            <textarea onChange={handleScanBodyChange} value={scanBody} style={{ width: "100%", height: "300px", display: "block", marginTop: "10px", marginBottom: "10px;" }} />
                        </div>
                        <button>Add Scan</button>
                    </form>
                    <div className="row" style={{ marginTop: "20px" }}>
                        <p>Horizon Scanning looks towards the long term (Horizon 2 to 3) but is not focussed exclusively on it; many H3 developments are the long term outcome of a range of factors, some of which are in play already.</p>
                        <p>In each scan, summarise briefly:</p>
                        <ul>
                            <li>what the scan is about</li>
                            <li>how it relates to the policy or strategy area</li>
                            <li>why you think it is important and what thoughts the scan stimulated</li>
                        </ul>
                        <p>The scan can contain links to the original source material and to any other relevant or interesting articles that you're aware of.</p>
                    </div>
                    <div className="row continue-to">
                        <p>When you're ready, continue to</p>
                        <span className="align-middle" id="driver-mapping" onClick={handleClick}>
                            <img src={LogoDriverMapping} style={{ width: "50px", height: "50px" }} id="driver-mapping" />Driver Mapping
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export { HorizonScanning };
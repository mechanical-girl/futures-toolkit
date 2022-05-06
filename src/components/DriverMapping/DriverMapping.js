
import { render } from 'react-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ScanModal } from '../Modal/ScanModal.js'

import './driver-mapping.css';

import { BoxRow } from '../BoxRow/BoxRow.js'
import parse from 'html-react-parser';

import LogoDriverMapping from '../../assets/images/driver-mapping-logo.png'
import LogoVisioning from '../../assets/images/visioning-logo.png'
import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import backgroundImage from '../../assets/images/driver-mapping-axes.png'
import { useDrag } from 'react-dnd'

const style = {
    position: 'absolute',
    borderTop: '10px solid #E1E1E1',
    backgroundColor: '#A0001C',
    color: '#E1E1E1',
    padding: '0.5rem 1rem',
    cursor: 'move',
    display: '-webkit-box'
}

const Box = ({ id, left, top, hideSourceOnDrag, children }) => {
    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: ItemTypes.BOX,
            item: { id, left, top },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, left, top],
    )
    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag} />
    }

    return (
        <div
            className="box text-center"
            id={`scan-${id}`}
            ref={drag}
            style={{ ...style, left, top, width: '100px', height: '90px' }}
            data-testid="box"
        >
            <span className="dnd-box">{children}</span>
        </div>
    )
}

const styles = {
    width: 800,
    height: 599,
    border: '1px solid black',
    position: 'relative',
    backgroundImage: `url(${backgroundImage})`,
}

const ItemTypes = {
    BOX: 'box',
}

function buildStartingBoxes(scans, coords) {
    var retval = [];
    for (let i in scans) {
        let scan = scans[i];
        if (coords[i] === undefined) {
            coords.push({ left: 400, top: 300 });
        }
        retval.push({
            id: scan.id,
            left: coords[i]["left"],
            top: coords[i]["top"],
            title: scan.title
        })
    }

    return retval;
}

const DriverMapping = ({ scans, handleClick, modalShow, modalHandleClose, modalThisScan, passedCoords }) => {
    for (let i in scans) {
        scans[i]["horizontal"] = 6;
        scans[i]["vertical"] = 6;
    }
    const [coords, setCoords] = useState([]);
    const [formattedCoords, setFormattedCoords] = useState("");

    const Container = ({ hideSourceOnDrag, scans }) => {
        var startingBoxes = buildStartingBoxes(scans, coords);
        const [boxes, setBoxes] = useState(startingBoxes)
        const moveBox = useCallback(
            (id, left, top) => {
                setBoxes(
                    update(boxes, {
                        [id]: {
                            $merge: { left, top },
                        },
                    }),
                );
            },
            [boxes, setBoxes],
        )
        const [, drop] = useDrop(
            () => ({
                accept: ItemTypes.BOX,
                drop(item, monitor) {
                    const delta = monitor.getDifferenceFromInitialOffset()
                    let left = Math.round(item.left + delta.x)
                    let top = Math.round(item.top + delta.y)
                    if (left < 0) {
                        left = 0;
                    } else if (left > 700) {
                        left = 700;
                    }

                    if (top < 0) {
                        top = 0;
                    } else if (top > 510) {
                        top = 510;
                    }
                    moveBox(item.id, left, top);
                    updateBoxCoords(item.id, left, top);
                    return undefined
                },
            }),
            [moveBox],
        )
        return (
            <div ref={drop} style={styles} className="driver-mapping-area">
                {Object.keys(boxes).map((key) => {
                    const { left, top, title } = boxes[key]
                    return (
                        <Box
                            key={key}
                            id={key}
                            left={left}
                            top={top}
                            hideSourceOnDrag={hideSourceOnDrag}
                        >
                            {title}
                        </Box>
                    )
                })}
            </div>
        )
    }

    const updateBoxCoords = (id, left, top) => {
        coords[id] = { left, top };
        setCoords(coords);
        let newFormattedCoords = "";
        for (let i in scans) {
            let coord = coords[i];
            let scanTitle = scans[i]["title"];
            let scanHorizontal = Math.round((coord["left"] + 50) / 75);
            let scanVertical = Math.round((coord["top"] + 45) / 55);
            newFormattedCoords += `${scanTitle}: Certainty of outcome: ${scanHorizontal}, importance of outcome to policy ${11 - scanVertical}<br />`;
            scans[i]["horizontal"] = scanHorizontal;
            scans[i]["vertical"] = scanVertical;
        };
        setFormattedCoords(newFormattedCoords);
    }

    return (
        <div className="container m" >
            <div className="row">
                <div className="col text-center h2">
                    <img src={LogoDriverMapping} />
                    <span>Driver Mapping</span>
                </div>
            </div>
            <div className="row">
                <div className="col col-9">
                    <DndProvider backend={HTML5Backend}>
                        <Container hideSourceOnDrag={false} scans={scans} passedCoords={coords} />
                    </DndProvider>
                    {parse(formattedCoords)}
                    <div className="continue-to">
                        <p>When you're ready, continue to</p>
                        <span className="align-middle" id="visioning" onClick={handleClick}>
                            <img src={LogoVisioning} style={{ width: "50px", height: "50px" }} id="visioning" />Visioning
                        </span>
                    </div>
                </div>
                <div className="col col-3">
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
        </div >
    )
}

export { DriverMapping };
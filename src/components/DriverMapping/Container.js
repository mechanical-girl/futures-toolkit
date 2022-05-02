import update from 'immutability-helper'
import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Box } from './Box.js'
import { ItemTypes } from './ItemTypes.js'
import backgroundImage from '../../assets/images/driver-mapping-axes.png'
const styles = {
    width: 800,
    height: 599,
    border: '1px solid black',
    position: 'relative',
    backgroundImage: `url(${backgroundImage})`,
}

function buildStartingBoxes(scans) {
    var retval = [];
    for (let i in scans) {
        let scan = scans[i];
        retval.push({
            id: scan.id,
            left: 400,
            top: 300,
            title: scan.title
        })
    }

    return retval;
}

export const Container = ({ hideSourceOnDrag, scans }) => {
    var startingBoxes = buildStartingBoxes(scans);
    const [boxes, setBoxes] = useState(startingBoxes)
    const moveBox = useCallback(
        (id, left, top) => {
            setBoxes(
                update(boxes, {
                    [id]: {
                        $merge: { left, top },
                    },
                }),
            )
        },
        [boxes, setBoxes],
    )
    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset()
                const left = Math.round(item.left + delta.x)
                const top = Math.round(item.top + delta.y)
                moveBox(item.id, left, top)
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
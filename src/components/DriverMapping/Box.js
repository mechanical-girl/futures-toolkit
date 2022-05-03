import { useDrag } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import { Box as BoxComp } from '../BoxRow/BoxRow.js'
const style = {
    position: 'absolute',
    border: '0px solid #A0001C',
    borderTop: '10px solid #E1E1E1',
    backgroundColor: '#A0001C',
    color: '#E1E1E1',
    padding: '0.5rem 1rem',
    cursor: 'move',
}


export const Box = ({ id, left, top, hideSourceOnDrag, children }) => {
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
            {children}
        </div>
    )
}
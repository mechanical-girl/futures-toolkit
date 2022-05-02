
import { render } from 'react-dom'
import { Container } from './Container.js'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { ScanModal } from '../Modal/ScanModal.js'

import { BoxRow } from '../BoxRow/BoxRow.js'

import LogoDriverMapping from '../../assets/images/driver-mapping-logo.png'

const DriverMapping = ({ scans, handleClick, modalShow, modalHandleClose, modalThisScan }) => {
    return (

        <div className="container m" >
            <div className="row">
                <div className="col text-center h2">
                    <img src={LogoDriverMapping} />
                    <span>Horizon Scanning</span>
                </div>
            </div>
            <div className="row">
                <div className="col col-9">
                    <DndProvider backend={HTML5Backend}>
                        <Container hideSourceOnDrag={false} scans={scans} />
                    </DndProvider>
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
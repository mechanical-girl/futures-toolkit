import * as React from 'react';
import { importAll } from '../utils/importAll.js';
const images = importAll(require.context('./../assets', false, /\.(png|jpe?g|svg)$/));

const Icons = ({ scan }) => {
    return (
        <div className="row scan-icons">
            <div className="col">
                <img src={images["epc_" + scan.icons.epc + ".png"]} alt={"epc_" + scan.icons.epc + ".png"} className="icon-image" />
            </div>
            <div className="col">
                <img src={images["nmo_" + scan.icons.nmo + ".png"]} alt={"nmo_" + scan.icons.nmo + ".png"} className="icon-image" />
            </div>
            <div className="col">
                <img src={images["pbr_" + scan.icons.pbr + ".png"]} alt={"pbr_" + scan.icons.pbr + ".png"} className="icon-image" />
            </div>
            <div className="col">
                <img src={images["sw_" + scan.icons.sw + ".png"]} alt={"sw_" + scan.icons.sw + ".png"} className="icon-image" />
            </div>
            <div className="col">
                <img src={images["fmes_" + scan.icons.fmes + ".png"]} alt={"fmes_" + scan.icons.fmes + ".png"} className="icon-image" />
            </div>
        </div>
    )
};

export { Icons }
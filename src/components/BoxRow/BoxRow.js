import * as React from 'react';
import parse from 'html-react-parser';

// `items` is an array of JSON dicts, each representing a single scan or category:
//      - id (string): the identifier for the scan or category
//      - title (string): the title of the scan or category
//      - blurb (string): the one-sentence descriptor of the scan or category
//
// `type` is a string, identifying the items as being a scan, a category, or a report
//
// `onClick` is used to define the click handler.
const BoxRow = ({ items, type, onClick }) => {
    return (
        <div className={`row row-cols-3 box-row`}>
            {
                items.map((item) => (
                    <Box
                        key={item.id}
                        item={item}
                        type={type}
                        onClick={onClick}
                    />
                ))
            }
        </div >
    )
}

const Box = ({ item, type, onClick }) => {
    return (
        <div key={item.id} className="col-1 text-center box-div ratio ratio-1x1">
            <div className={`box-title flexbox`} onClick={onClick} id={`${type} ${item.id}`}>
                <span id={`${type} ${item.id}`}>
                    {item.title}
                </span>
            </div>
            <div className={`${type} ${item.id} ${type}-${item.id} box`} onClick={onClick} id={`${type} ${item.id}`}>
                {parse(item.blurb)}
            </div>
        </div >
    )
}

export { BoxRow };
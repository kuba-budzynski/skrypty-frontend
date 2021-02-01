import React from 'react'
import Workbook from 'react-excel-workbook'
import { v4 as uuidv4 } from 'uuid';

export const DownloadButton = () => {
    return(
        <div className="container mx-auto flex absolute bottom-0">
            <button className={`inline-block py-4 px-8 text-xs text-white text-center font-semibold leading-none bg-green-500 hover:bg-green-600 rounded mx-auto mt-8 mb-4`}>
                DOWNLOAD TO EXCEL
            </button>
        </div>
    )
}

function ExcelDownload({detection}) {

    const data = detection.map(d => {
        return {
            object: d.name,
            probability: d.percentage_probability,
            x_1: d.box_points[0],
            x_2: d.box_points[1],
            y_1: d.box_points[2],
            y_2: d.box_points[3]
        }
    })

    return (
        <div className="row text-center">
            <Workbook filename={"objects-"+ uuidv4()+".xlsx"} element={<DownloadButton ></DownloadButton>}>
            <Workbook.Sheet data={data} name="Object recognition">
                <Workbook.Column label="object" value="object"/>
                <Workbook.Column label="probability" value="probability"/>
                <Workbook.Column label="x_1" value="x_1"/>
                <Workbook.Column label="x_2" value="x_2"/>
                <Workbook.Column label="y_1" value="y_2"/>
                <Workbook.Column label="y_2" value="y_2"/>
            </Workbook.Sheet>
            </Workbook>
        </div>
    )
}

export default ExcelDownload

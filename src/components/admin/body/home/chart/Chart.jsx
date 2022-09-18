import { CanvasJSChart } from 'canvasjs-react-charts'
import { useState } from 'react'
const Chart = () => {

    const [chartData, setChartData] = useState([])
    const options = {
        exportEnabled: true,
        animationEnabled: true,
        data: [{
            type: "pie",
            startAngle: 75,
            click: onClick,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { _id: '_6tyfbwhfjkj', y: 55, label: "Direct", color: "#3D7FFF" },
                { _id: '_30tyfbwhfjkj', y: 30, label: "Organic Search", color: "#FF7C52" },
                { _id: '_15tyfbwhfjkj', y: 15, label: "Paid Search", color: "#FFC327" },
            ],
        }]
    }
    function onClick(e) {
        setChartData(e.dataPoint._id)
        document.getElementById("data").style.display = 'block'
    }
    function removeData() {
        document.getElementById("data").style.display = 'none'
        setChartData([])
    }

    return (
        <>
            <div className=' mb-5' >

                <div className='card pb-4' style={{ borderRadius: "10px" }}>
                    <div className='d-flex justify-content-between mb-3 pl-4 pr-4 pt-4'>
                        <h5 className='mt-2'>Analytics</h5>
                        <div id="data" style={{ display: 'none' }}>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".largeModel">Show Data</button>
                        </div>
                    </div>
                    <CanvasJSChart options={options} />
                </div>
            </div>



            <div className="modal fade bd-example-modal-lg largeModel" tabIndex="-1" role="dialog" aria-labelledby="largeModel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                        </div>
                        <div className="modal-body">
                            {chartData}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={removeData} >Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Chart
// For PDF View
import { Worker, Viewer, ScrollMode, SpecialZoomLevel } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
const SearchModal = (props) => {
    const { data } = props
    // For PDF View
    const defaultLayoutPluginInstance = defaultLayoutPlugin({
        toolbarPlugin: {
            fullScreenPlugin: {
                onEnterFullScreen: (zoom) => {
                    zoom(SpecialZoomLevel.PageFit);
                    defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
                        ScrollMode.Wrapped
                    );
                },
                onExitFullScreen: (zoom) => {
                    zoom(SpecialZoomLevel.PageWidth);
                    defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
                        ScrollMode.Vertical
                    );
                },
            },
        },
    });

    return (
        <>
            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Activity</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body pl-5 pr-5">
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className='mb-4 mt-4 '>
                                        <label><h6>Activity Name</h6></label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            rows="3"
                                            defaultValue={`${data.heading?.categoryId}_${data.heading?.categoryName}`}
                                            disabled
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className='mb-4 mt-4 '>
                                        <label><h6>Requirement</h6></label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            rows="3"
                                            defaultValue={data.heading?.requirement}
                                            disabled
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className='mb-4 mt-4 pt-1'>
                                        <label><h6>Description</h6></label>
                                        <textarea
                                            type="text"
                                            className="form-control"
                                            rows="3"
                                            defaultValue={data.discription}
                                            disabled
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className='mb-4 mt-1 '>
                                        <label>Recommend by Faculty</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={data?.approvedByF?.name}
                                            disabled
                                        />
                                    </div>
                                    {
                                        data.approvedByA
                                            ? <div className='mb-4 mt-4 '>
                                                <label>Approved by Activity Point Coordinator</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue={data?.approvedByA?.name}
                                                    disabled
                                                />
                                            </div>
                                            : null
                                    }
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className='mb-4 mt-3 '>
                                        <label>Publish Date</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={data?.publishDate?.split('T')[0]}
                                            disabled
                                        />
                                    </div>
                                </div>
                                {
                                    data.completedDate
                                        ? <div className="col-lg-6 col-md-6 col-sm-12">
                                            <div className='mb-4 mt-3 '>
                                                <label>Approved</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue={data?.completedDate?.split('T')[0]}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        : null
                                }
                            </div>

                            <div>
                                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                                    <div style={{ height: "600px" }}>
                                        <Viewer fileUrl={`http://aps.ppsu.ac.in:3006/getFile${data.document}`} plugins={[defaultLayoutPluginInstance]} />
                                    </div>
                                </Worker>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SearchModal
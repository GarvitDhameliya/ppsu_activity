import ppsu_logo from './assets/img/ppsu_logo.png'
const PageNotFound = () => {
    return (
        <>
            <div className="container">
                <div className='notFound_err_handle'>
                    <div className='text-center'>
                        <img src={ppsu_logo} className="logo" />
                    </div>
                    <p className="zoom-area"><b>Opps!</b> Page not Found! </p>
                    <section className="error-container">
                        <span className="four"><span className="screen-reader-text">4</span></span>
                        <span className="zero"><span className="screen-reader-text">0</span></span>
                        <span className="four"><span className="screen-reader-text">4</span></span>
                    </section>
                    <div className="link-container">
                        <div className="more-link" style={{ fontSize: '20px' }}>🙏आपका धन्यवाद| 👏</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageNotFound
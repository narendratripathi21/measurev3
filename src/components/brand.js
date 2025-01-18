import logo from '../assets/icons/logo.svg'
export default function Brand(){
    const onClickHandler = (x) => {

    }
    return(<>
        <a onClick={() => onClickHandler('report')}>
          <div className="col">
            <img src={logo} alt="JASPER" width={50} height={50} />
            <strong><h3>Measure</h3></strong>
          </div>
        </a>
    </>)
}
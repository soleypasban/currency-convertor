import { getAllAPIs } from '../endpoint'
import './style.css'

const whereAmI = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

const Index = ({ revolut, ccapi, europa }) => (
    <>
        <div className="title">USD to EUR</div>
        <div className="cards">
            <div className="card">
                <div className="provider">Revolut<br />Card</div>
                <div className="rate">{Number(revolut.rate).toFixed(4)}</div>
            </div>
            <div class="card">
                <div className="provider">European<br />Central Bank</div>
                <div className="rate">{Number(europa.rate).toFixed(4)}</div>
            </div>
            <div class="card">
                <div className="provider">Currency<br />Converter API</div>
                <div className="rate">{Number(ccapi.rate).toFixed(4)}</div>
            </div>
        </div>
        <p className="info">This script has loaded from <b>{whereAmI()}</b> side</p>
    </>
);

Index.getInitialProps = async function () {
    return await getAllAPIs()
}

export default Index
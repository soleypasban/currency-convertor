import { getAllAPIs } from '../endpoint'

const whereAmI = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

const Index = ({ revolut, ccapi, europa }) => (
    <div>
        <h1>Revolut</h1>
        <div>1.00 {revolut.from} equals to {revolut.to} {revolut.rate}</div>
        <hr />
        <h1>European Central Bank</h1>
        <div>1.00 {europa.from} equals to {europa.to} {europa.rate}</div>
        <hr />
        <h1>Currency Converter API</h1>
        <div>1.00 {ccapi.from} equals to {ccapi.to} {ccapi.rate}</div>
        <hr />
        <p>This script has loaded from {whereAmI()}</p>
    </div>
);

Index.getInitialProps = async function () {
    return await getAllAPIs()
}

export default Index;
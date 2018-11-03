import { getAllAPIs } from '../endpoint'

const Rates = ({ revolut, ccapi, europa }) => {
    const all = { revolut, ccapi, europa }
    return <pre>{JSON.stringify(all, null, 2)}</pre>
}

Rates.getInitialProps = async function () {
    return await getAllAPIs()
}

export default Rates;
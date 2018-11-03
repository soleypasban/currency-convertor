import { getAllAPIs } from '../endpoint'
import styles from "./style.css"


const whereAmI = () => {
    return (typeof window !== 'undefined' && window.document) ? 'client' : 'server';
};

const Index = ({ revolut, ccapi, europa }) => (
    <>
        <div className={styles.title}>USD to EUR</div>
        <div className={styles.cards}>
            <div className={styles.card}>
                <div className={styles.provider}>Revolut<br />Card</div>
                <div className={styles.rate}>{Number(revolut.rate).toFixed(4)}</div>
            </div>
            <div className={styles.card}>
                <div className={styles.provider}>European<br />Central Bank</div>
                <div className={styles.rate}>{Number(europa.rate).toFixed(4)}</div>
            </div>
            <div className={styles.card}>
                <div className={styles.provider}>Currency<br />Converter API</div>
                <div className={styles.rate}>{Number(ccapi.rate).toFixed(4)}</div>
            </div>
        </div>
        <p className={styles.info}>This script has loaded from <b>{whereAmI()}</b> side</p>
    </>
);

Index.getInitialProps = async function () {
    return await getAllAPIs()
}

export default Index
import fetch from 'isomorphic-unfetch'
import convert from 'xml-js'

export const getRevolut = async () => {
    // [ { from: 'USD',
    // to: 'EUR',
    // rate: 0.87361,
    // timestamp: 1541256357497 } ]
    const res = await fetch('https://www.revolut.com/api/quote/internal?symbol=USDEUR')
    const data = await res.json()
    return data[0]
}

export const getCurrencyConverterAPI = async () => {
    // { USD_EUR: { val: 0.878075 } }
    const res = await fetch('http://free.currencyconverterapi.com/api/v5/convert?q=USD_EUR&compact=y')
    const data = await res.json()
    return {
        from: 'USD',
        to: 'EUR',
        rate: data['USD_EUR'].val
    }
}

export const getEuropa = async () => {
    // <Cube>
    //   <Cube time="2015-07-07">
    //   <Cube currency="USD" rate="1.0931"/>
    // </Cube>
    const xml = await fetch('https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml')
    const raw = await xml.text()
    var json = JSON.parse(convert.xml2json(raw, { compact: true, spaces: 4 }));
    const list = json['gesmes:Envelope']['Cube']['Cube']['Cube']
        .map(x => x['_attributes'])
        .map(x => ({ from: 'EUR', to: x['currency'], rate: (1 / x['rate']).toFixed(4) }))
    const eurusd = list.find(x => x.to === 'USD')
    return {
        from: 'USD',
        to: 'EUR',
        rate: eurusd.rate
    }
}

export const getAllAPIs = async function () {
    return { revolut: await getRevolut(), ccapi: await getCurrencyConverterAPI(), europa: await getEuropa() }
}
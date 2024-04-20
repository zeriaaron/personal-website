import '../assets/styles/Certificates.css'
import { useState } from 'react'
import Cisco from './certificates/Cisco'
import Meta from './certificates/Meta'
import Microsoft from './certificates/Microsoft'


let Certificates = () => {
    const [cert, setCert] = useState('meta')

    const checkedHandler = (e) => {
        setCert(e.target.value)
    }

    const switchCarousel = (val) => {
        switch (val) {
            case 'cisco':
                return <Cisco />
            case 'micro':
                return <Microsoft />
            default:
                return <Meta />
        }
    }

    return (
        <main>
            <h1>Certificates page</h1>
            <ul className='d-flex 
            flex-row 
            justify-content-center
            align-items-center
            flex-wrap'>
                <li>
                    <input type="radio"
                        name='cert'
                        id='cert1'
                        value='cisco'
                        onChange={checkedHandler}
                    />
                    <label htmlFor="cert1">
                        Cybersecurity Certificates
                    </label>
                </li>
                <li>
                    <input type="radio"
                        name='cert'
                        id='cert2'
                        value='meta'
                        defaultChecked
                        onChange={checkedHandler}
                    />
                    <label htmlFor="cert2">
                        Front-End Development Certificates
                    </label>
                </li>
                <li>
                    <input type="radio"
                        name='cert'
                        id='cert3'
                        value='micro'
                        onChange={checkedHandler}
                    />
                    <label htmlFor="cert3">
                        Microsoft Excel Certificates
                    </label>
                </li>
            </ul>

            {switchCarousel(cert)}
        </main>
    )
}

export default Certificates;
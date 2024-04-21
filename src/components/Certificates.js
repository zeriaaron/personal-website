import certStyle from '../assets/styles/Certificates.module.css'
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
            <ul className={`d-flex 
            flex-row 
            justify-content-center
            align-items-center
            flex-wrap
            ${certStyle.ulContainer}`}>
                <li>
                    <input type="radio"
                        name='cert'
                        id='cert1'
                        value='cisco'
                        onChange={checkedHandler}
                        className={certStyle.inputContainer}
                    />
                    <label htmlFor="cert1" className={certStyle.labelContainer}>
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
                        className={certStyle.inputContainer}
                    />
                    <label htmlFor="cert2" className={certStyle.labelContainer}>
                        Front-End Development Certificates
                    </label>
                </li>
                <li>
                    <input type="radio"
                        name='cert'
                        id='cert3'
                        value='micro'
                        onChange={checkedHandler}
                        className={certStyle.inputContainer}
                    />
                    <label htmlFor="cert3" className={certStyle.labelContainer}>
                        Microsoft Excel Certificates
                    </label>
                </li>
            </ul>

            {switchCarousel(cert)}
        </main>
    )
}

export default Certificates;
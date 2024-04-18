import '../assets/styles/Certificates.css'



let Meta = () => {
    return (
        <h1>Meta</h1>
    )
}

let Cyber = () => {
    return (
        <h1>Cyber</h1>
    )
}

let Excel = () => {
    return (
        <h1>Excel</h1>
    )
}

let Certificates = () => {
    return (
        <main>
            <h1>Certificates page</h1>
            <ul>
                <li>
                    <input type="radio"
                        name='cert'
                        id='cert1' />
                    <label className='btn-primary' htmlFor="option1">
                        Junior Cybersecurity Analyst Career Path Certificate
                    </label>
                </li>
                <li>
                    <input type="radio"
                        className='btn-check'
                        name='cert'
                        id='cert2' />
                    <label className='btn' htmlFor="option2">
                        Meta Front-End Developer Professional Certificate
                    </label>
                </li>
                <li>
                    <input type="radio"
                        className='btn-check'
                        name='cert'
                        id='cert3' />
                    <label className='btn' htmlFor="option3">
                        Microsoft Excel Certificate
                    </label>
                </li>
            </ul>
        </main>
    )
}

export default Certificates;
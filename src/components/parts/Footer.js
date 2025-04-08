import footerStyle from '../../assets/styles/parts/Footer.module.css'

export default function Footer() {
    return (
        <footer className={footerStyle.footer}>
            <div className={`${footerStyle.div}`}>
                <strong><p className={`${footerStyle.p}`}>All Rights Reserved &copy; 2024 - 2025 Zeri Aaron Malacas</p></strong>
            </div>
        </footer>
    )
}
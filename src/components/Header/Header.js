import './Header.css'

function Header() {
    return (
        <div className="Header h-40 bg-header bg-cover bg-center">
            <div className="header-text text-white h-full flex flex-col items-center justify-center">
                <h1 className='header-title'>NYE CON</h1>
                <h2 className='header-date'>12.31.2023 - 1/1/2024</h2>
            </div>
        </div>
    )
}

export default Header
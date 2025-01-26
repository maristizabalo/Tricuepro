import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center bg-slate-900 text-white pb-6">
            <p className="text-sm">
                © {new Date().getFullYear()} KrocoBilliards. Todos los derechos reservados.
            </p>
        </footer>
    )
}

export default Footer
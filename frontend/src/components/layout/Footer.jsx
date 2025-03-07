import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center text-neutral-700 dark:text-slate-300 pb-6 pt-20 font-bold bg-slate-100 dark:bg-neutral-900">
            <p className="text-sm">
                © {new Date().getFullYear()} KrocoBilliards. Todos los derechos reservados.
            </p>
        </footer>
    )
}

export default Footer
import { Link } from 'react-router-dom'

export const SignOprions = () => {
    return (
        <div className="rounded-md shadow-lg border border-gray-200 bg-white py-1 outline -outline-offset-1 outline-white/10 transition transition-discrete ">
            <Link to={''} className="block px-4 py-2 hover:text-sky-500 text-sm text-gray-900 focus:bg-white/5 focus:outline-hidden">Sign in</Link>
            <Link to={''} className="block px-4 py-2 hover:text-sky-500 text-sm text-gray-900 focus:bg-white/5 focus:outline-hidden">Sign out</Link>
            <Link to='/settings' className="block px-4 hover:text-sky-500 py-2 text-sm text-gray-900 focus:bg-white/5 focus:outline-hidden">Settings</Link>
        </div>


    )
}
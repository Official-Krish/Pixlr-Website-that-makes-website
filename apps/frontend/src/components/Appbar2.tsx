import Logo from '../assets/Logo.png';
import Cookies from 'js-cookie';
import { UserDropdown } from './DropDown';

export const Appbar2 = () => {
    return <div className="bg-brown3 flex justify-around items-center p-3 shadow-lg border-b-2 border-brown2">
        <div className="flex">
            <img src={Logo} className="h-12 w-auto rounded-full pr-2" />
            <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-3xl font-bold text-transparent bg-clip-text cursor-pointer flex items-center" onClick={() => window.location.href = '/'}>
                Pixlr
            </div>
        </div>
        <div className="flex justify-between text-gray-400 text-md font-medium space-x-10">
            <button className="hover:underline hover:text-gray-200">About</button>
            <button className="hover:underline hover:text-gray-200">How it Works</button>
            <button className="hover:underline hover:text-gray-200">Showcase</button>
            <button className="hover:underline hover:text-gray-200">Pricing</button>
        </div>

        {Cookies.get("token") ? <UserDropdown /> : 
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg" onClick={() => window.location.href = '/signin'}>
                Get Started
            </button>
        }
    </div>
}
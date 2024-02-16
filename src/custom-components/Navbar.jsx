import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <div className="gap-x-5 py-10 px-20 flex w-full ">

        <div id='nav-left' className="flex-1 flex gap-x-5">
            <BellIcon className="max-w-10 min-w-10"></BellIcon>
            <div className="px-10 flex flex-row gap-x-10">
                <button className=" text-white shadow-2xl text-lg">Home</button>
                <button className=" text-white shadow-2xl text-lg">Search</button>
                <button className=" text-white shadow-2xl text-lg">Account</button>
            </div>
        </div>

        <div id='nav-right' className="flex-1 flex justify-end ">
            <button className=" text-white shadow-2xl text-lg bg-accentmain rounded-md px-5">Sign Out</button>
        </div>

    </div>
  )
}

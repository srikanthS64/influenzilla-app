import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import vector from "../../assets/icons/Vector.svg"
import star1 from "../../assets/icons/Star 1.svg"

const navigation = [
    { name: 'ABOUT', href: '#', current: true },
    { name: 'SERVISES', href: '#', current: false },
    { name: 'CASES', href: '#', current: false },
    { name: 'TEAM', href: '#', current: false },
]
const navbar = [
    { name: 'BOOST PROGRAM', href: '#', current: true },
    { name: 'SPRODUCTS', href: '#', current: false },
    { name: 'BOOK', href: '#', current: false },
    { name: 'BLOG', href: '#', current: false },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-black w-[1500px] self-center items-center justify-center max-sm:w-40 max-sm:-ml-56">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 border-2 border-white p-3 max-sm:border-none">
                        <div className="relative flex h-16 items-center justify-between ">
                            <div className=' flex flex-row-reverse gap-36 max-sm:border-2 border-white '>
                                <div className=" inset-y-0 left-0 flex items-center sm:hidden border-l-2 border-white p-2 max-sm:-ml-6">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <h1 className=' text-white font-bold'>MENU</h1>
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-centre sm:justify-centre max-sm:pl-5 max-sm:self-center">
                                    <div className="flex flex-shrink-0 items-center gap-5">
                                        <img src={star1} alt="" />
                                        <h1 className=' text-white font-bold pr-9'>Influenzilla</h1>
                                        <p className=' text-white max-sm:hidden w-36'>bespoke design and marketing services</p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0 flex flex-col max-sm:hidden ">
                                
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

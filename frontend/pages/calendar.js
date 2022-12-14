import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarDaysIcon,
  ArrowDownTrayIcon,
  UserGroupIcon,
  UserPlusIcon,
  DocumentDuplicateIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef } from "react";


const navigation = [
  { name: 'Calendar', href: '#', icon: CalendarDaysIcon, current: true },
  { name: 'My Clubs', href: '/myclubs', icon: UserGroupIcon, current: false },
  { name: 'Club Finder', href: '/findclubs', icon: UserPlusIcon, current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CalendarPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [page, setPage] = useState('calendar')
  const calendarRef = useRef(null);
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
                    <a href="#" className="group block flex-shrink-0">
                      <div className="flex items-center">
                        <div>
                          <img
                            className="inline-block h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                          <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">Edit profile</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0">{/* Force sidebar to shrink to fit close icon */}</div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
              </div>
              <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 border-t border-gray-200 p-4">
              <a href="#" className="group block w-full flex-shrink-0">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">Edit profile</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className='grid grid-cols-1 sm:grid-cols-4 my-12 sm:px-0 px-6'>
              <div className="mx-auto w-full sm:px-6 lg:px-8 col-span-1">
              <h3 className='font-bold pb-1 text-xl'>Filter Clubs</h3>
                <div className='bg-white shadow-md rounded-md px-4 pb-4'>
                    <fieldset className="space-y-5">
                        <legend className="sr-only">Filter Clubs</legend>
                        <div className="relative flex items-start">
                            <div className="flex h-5 items-center">
                            <input
                                id="comments"
                                aria-describedby="comments-description"
                                name="comments"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="comments" className="font-medium">
                                    Bee Club
                                </label>
                            </div>
                        </div>
                        <div className="relative flex items-start">
                            <div className="flex h-5 items-center">
                            <input
                                id="candidates"
                                aria-describedby="candidates-description"
                                name="candidates"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            </div>
                            <div className="ml-3 text-sm">
                            <label htmlFor="candidates" className="font-medium">
                                BU Blockchain
                            </label>
                            </div>
                        </div>
                        <div className="relative flex items-start">
                            <div className="flex h-5 items-center">
                            <input
                                id="offers"
                                aria-describedby="offers-description"
                                name="offers"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            </div>
                            <div className="ml-3 text-sm">
                            <label htmlFor="offers" className="font-medium">
                                BU EMS Club
                            </label>
                            </div>
                        </div>
                    </fieldset>
                </div>
                <h3 className='font-bold pb-1 pt-8 text-xl'>Export Calendar</h3>
                <div className='bg-white shadow-md rounded-md px-4 py-4'>
                    <div className='font-medium text-sm space-y-4'>
                        <a href='#' className='flex'><ArrowDownTrayIcon className="h-6 w-6" aria-hidden="true"/> <p className='ml-1'>PDF</p></a>
                        <a href='#' className='flex'><DocumentDuplicateIcon className="h-6 w-6" aria-hidden="true"/> <p className='ml-1'>Copy Calendar Link</p></a>
                    </div>
                </div>
              </div>
              <div className="mx-auto w-full sm:pr-10 sm:px-6 lg:px-8 col-span-3">
                <div border-none>
                <FullCalendar
                    innerRef={calendarRef}
                    plugins={[timeGridPlugin, interactionPlugin]}
                    editable
                    selectable
                    events={[
                        {
                          id: 'a',
                          title: 'my event',
                          start: '2022-10-15',
                        }
                      ]}
                />
                </div>
              </div>
          </main>
        </div>
      </div>
    </>
  )
}

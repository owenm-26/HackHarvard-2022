export default function ClubCard() {
    return (
        <>
        <div className="bg-white shadow-md rounded-md ">
            <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-12 lg:px-8">
                <div className=''>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
                        <span className="block">BU Blockchain</span>
                    </h2>
                    <p className="block text-lg">This is a sample description of a club.</p>
                </div>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                    <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
                    >
                    Follow
                    </a>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

const Loader = () => {
    return (
        <div role="status" className="p-4 rounded-md shadow-md m-3 animate-pulse bg-slate-300 bg-opacity-50 backdrop-blur-[12px] overflow-hidden">
            <div className="h-5 bg-gray-200 rounded-md dark:bg-gray-700 w-48 mb-5 mt-2"></div>

            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-[90%] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 w-[95%] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-[87%] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[30%] mb-2.5"></div>

            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 w-[87%] mb-2.5 mt-7"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-[95%] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[20%] mb-2.5"></div>

            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-[90%] mb-2.5 mt-7"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-500 w-[85%] mb-2.5"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[50%] mb-2.5"></div>

            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-600 w-[70%] mt-7"></div>
        </div>
    )
}

export default Loader;
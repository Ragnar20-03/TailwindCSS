
export default function Nav () 
{
    return <div className=" grid-cols-1 bg-teal-800 m-3 sm:flex-row sm:rounded-md sm:grid sm:grid-cols-12 shadow-lg shadow-slate-700">
        <div className="text-white p-3 m-2 col-span-2 flex justify-center ">
            <h1 className="text-lg">NavBar</h1>
            
        </div>
        <div className=" grid grid-cols-1 sm:justify-center sm:flex sm: gap-10 sm:col-span-8 text-white ">
        <button  className=" hover:text-slate-300 hover:duration-200">
                Home
            </button>
            <button className=" hover:text-slate-300 hover:duration-200">
                Projects
            </button>
            <button className=" hover:text-slate-300 hover:duration-200">
                About
            </button >
            <button className=" hover:text-slate-300 hover:duration-200">
                Account
            </button>
        </div>
        <div className=" hidden md:col-span-2 md:flex p-1 md:justify-center ">
            <input type="text"  placeholder = "Search" className=" rounded-lg p-1 m-3" name="" id="" />
        </div>
    </div>
}
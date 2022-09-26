import {Link} from "react-router-dom";

export default function Menu(){


    return (
        <div className='h-screen flex flex-col items-center justify-center'>

            <div className="w-full md:w-3/4 px-10 md:px-0">
                <div className={'border-b border-gray-300 py-5'}>
                    <span className="block text-3xl">Menu</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 mt-10">
                   <Link to={'/biometric'}>
                       <div className="h-32 cursor-pointer bg-[#00838f] p-3 text-teal-50 flex flex-col justify-between">
                           <span className="block text-[12px] font-semibold uppercase">Biometrics Registration</span>
                           <div className="border-t border-teal-500 text-teal-50 flex">
                               <div className='mt-2'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                       <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                   </svg>
                               </div>
                           </div>
                       </div>
                   </Link>

                    <Link to={'/'}>
                        <div className="h-32 cursor-pointer bg-[#00838f] p-3 text-teal-50 flex flex-col justify-between">
                            <span className="block text-[12px] font-semibold uppercase">Member Status Update</span>
                            <div className="border-t border-teal-500 text-teal-50 flex">
                                <div className='mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to={'/profile'}>
                        <div className="h-32 cursor-pointer bg-[#00838f] p-3 text-teal-50 flex flex-col justify-between">
                            <span className="block text-[12px] font-semibold uppercase">Claims</span>
                            <div className="border-t border-teal-500 text-teal-50 flex">
                                <div className='mt-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>

                </div>
            </div>

        </div>
    )
}
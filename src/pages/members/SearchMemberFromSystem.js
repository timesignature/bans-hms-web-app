import {useState} from "react";
import { RingSpinner} from "react-spinners-kit";
import usePatients from "../../hooks/usePatients";
import toast from "react-hot-toast";
import {useStatusProvider} from "../../providers/StatusProvider";

export default function SearchMemberFromSystem(){


    const {setStatus}=useStatusProvider()

    const [search,setSearch]=useState('')

    const {data:patients,isLoading,isError}=usePatients()

    const getPatient=()=>{
        for(let i=0;i<patients.length;i++){
            // console.log(patients[i])
            let p=patients[i]
            if(p?.Medical_Aid_Member_No?.toLowerCase()===search?.toLowerCase() && search?.length>0){
                console.log(p.Medical_Aid_Member_No)
                return p
            }
        }
        return null
    }

    const _search=()=>{
        if(search.length===0){
            toast.custom(()=>(
                <div className='font-mont bg-orange-600 text-white max-w-[300px] p-5 rounded'>
                    <span>
                        Member Number is required
                    </span>
                </div>
            ),)
            return
        }


        if(getPatient()===null){
            setStatus('not_found')
        }else{
            setStatus('found')
        }
    }

    if(isLoading){
        return (
            <div className='h-screen w-full flex items-center justify-center'>
                <RingSpinner
                    size={150}
                    color="#00838f"
                    loading={isLoading}
                />
            </div>
        )
    }

    if(isError){

        return (
            <div className='h-screen w-full flex items-center justify-center'>
                <span className="block text-xs">something went wrong</span>
            </div>
        )

    }

    return (
        <div className='h-screen flex flex-col items-center justify-center'>
            <div className="w-1/2">
                <div className="w-full flex items-center justify-center space-x-5 border border-gray-400">
                    <div className="px-4 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        onChange={(val)=>setSearch(val.target.value)}
                        value={search}
                        placeholder={'enter member medical aid number'}
                        className='flex-1 bg-transparent focus:outline-none px-1 py-4 text-xs'
                    />

                    <button
                        type={"button"}
                        onClick={()=>_search()}
                        className="px-5 py-4 text-xs bg-gray-100">
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}
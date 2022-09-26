import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {useState} from "react";

export default function SaveBiometrics(){


    const [fingers,setFingers]=useState([
        {
            id:0,
            name:'left thumb finger',
            biometric:null,
        },

        {
            id:1,
            name:'left index finger',
            biometric:null,
        },

        {
            id:2,
            name:'left middle finger',
            biometric:null,
        },

        {
            id:3,
            name:'left ring finger',
            biometric:null,
        },

        {
            id:4,
            name:'left little finger',
            biometric:null,
        },

        {
            id:5,
            name:'right thumb finger',
            biometric:null,
        },

        {
            id:6,
            name:'right index finger',
            biometric:null,
        },

        {
            id:7,
            name:'right middle finger',
            biometric:null,
        },

        {
            id:8,
            name:'right ring finger',
            biometric:null,
        },

        {
            id:9,
            name:'right little finger',
            biometric:null,
        },
    ])


    const mutation=useMutation(values=>axios.post('/SGIFPCapture').then(res=>res.data),{
        onSuccess:async(data,variables)=>{
            _updateBiometrics(variables.id,data)
        },
        onError:(e)=>{
            console.log(e)
        }
    })


    const _updateBiometrics=(index,biometric)=>{
        fingers.map((d,i)=>{
            if(d.id===index){
                d.biometric=biometric
            }
            return d;
        })


    }



    const _submit=(v)=>{
        mutation.mutate({id:v.id})
    }





    return (
        <div className='h-screen flex flex-col items-center justify-center'>

           <div className="w-full md:w-3/4 px-10 md:px-0">
               <div className={'border-b border-gray-300 py-5'}>
                   <span className="block text-3xl">Biometric Registration</span>
               </div>

               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4 mt-10">
                   {
                       fingers.map((v,i)=>(
                           <div key={i} onClick={()=>_submit(v)} className="h-32 cursor-pointer bg-[#00838f] p-3 text-teal-50 flex flex-col justify-between">
                               <span className="block text-[12px] font-semibold uppercase">{v.name}</span>
                               <div className="border-t border-teal-500 text-teal-50 flex">
                                   <div className='mt-2'>
                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                       </svg>

                                   </div>
                               </div>
                               {
                                   v.biometric && (
                                       <img src={`data:image/bmp;base64,${v.biometric?.BMPBase64}`}
                                            alt=""
                                            className='w-full h-full object-cover'
                                       />
                                   )
                               }
                           </div>
                       ))
                   }
               </div>
           </div>

        </div>
    )
}
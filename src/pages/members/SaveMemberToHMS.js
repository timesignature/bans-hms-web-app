import {useStatusProvider} from "../../providers/StatusProvider";
import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export default function SaveMemberToHMS({data}){
















    const {setStatus}=useStatusProvider()







    const mutation=useMutation(async(values)=>{

        return axios.post('/PatientCard',values,{
            baseURL:`http://desktop-garljai:7048/BC130/ODataV4/Company('Baines Avenue Clinic')`,
            auth:{
                username:'shelton',
                password:'33552211Tembo*'
            }
        }).then(res=>res.data)


    },{
        onSuccess:async(d)=>{
            console.log(d)

            toast.custom(()=>(
                <div className='font-mont bg-green-600 text-white max-w-[300px] p-5 rounded'>
                    <span>
                        patient has been successfully saved to HMS
                    </span>
                </div>
            ),)
        },
        onError:(e)=>{
            toast.custom(()=>(
                <div className='font-mont bg-red-600 text-white max-w-[300px] p-5 rounded'>
                    <span>
                        {e?.response?.data?.error?.message}
                    </span>
                </div>
            ),)
        }
    })


    const _save=()=>{
        mutation.mutate(data)

    }



    return (
        <div className="mt-10 flex items-center space-x-5 border-t border-gray-300 py-5">
            <button onClick={()=>_save()} className="px-6 py-4 rounded text-xs bg-purple-600 text-white focus:outline-none">
                {
                    mutation.isLoading ? '...Saving Locally' : 'Save Locally'
                }
            </button>

            <button onClick={()=>setStatus('default')} className="px-6 py-4 rounded text-xs bg-gray-200 text-black focus:outline-none">
                Cancel
            </button>
        </div>
    )
}
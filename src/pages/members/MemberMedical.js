import InputComponent from "../../components/inputComponent";
import useMedicalAids from "../../hooks/useMedicalAids";

export default function MemberMedical({state,setState}){

    const {data}=useMedicalAids()


    return (
        <div>
            <div className="py-2 border-b border-gray-300">
                <span className="block text-sm font-bold">Medical Aid</span>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div>
                    <InputComponent
                        title={'Medical Aids'}
                        value={state.Medical_Aid_No}
                        type={'select'}
                        onChange={val=>setState(prev=>({...prev,Medical_Aid_No:val.target.value}))}
                        >
                        <option value="">Select Medical Aid</option>
                        {
                            data && data.map((d,i)=>(
                                <option key={i} value={d.No}>{d.Name}</option>
                            ))
                        }
                    </InputComponent>
                </div>

            </div>
        </div>
    )
}
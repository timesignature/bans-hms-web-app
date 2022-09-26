import InputComponent from "../../components/inputComponent";

export default function MemberAddress({state}){
    return (
        <div>
            <div className="py-2 border-b border-gray-300">
                <span className="block text-sm font-bold">Address</span>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div>
                    <InputComponent
                        title={'Line 1'}
                        value={state.Line1.toString()}
                        readOnly
                    />
                </div>

                <div>
                    <InputComponent
                        title={'Line 2'}
                        value={state.Line2.toString()}
                        readOnly
                    />
                </div>


                <div>
                    <InputComponent
                        title={'Code'}
                        value={state.Code.toString()}
                        readOnly
                    />
                </div>


                <div>
                    <InputComponent
                        title={'Country'}
                        value={state.Country.toString()}
                        readOnly
                    />
                </div>
            </div>
        </div>
    )
}
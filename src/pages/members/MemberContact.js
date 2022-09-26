import InputComponent from "../../components/inputComponent";

export default function MemberContact({state}){
    return (
        <div>
            <div className="py-2 border-b border-gray-300">
                <span className="block text-sm font-bold">Member Contacts</span>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div>
                    <InputComponent
                        title={'Mobile Primary'}
                        value={state.MobilePrimary}
                        readOnly
                    />
                </div>

                <div>
                    <InputComponent
                        title={'Work'}
                        value={state.Work}
                        readOnly
                    />
                </div>





            </div>

        </div>
    )
}
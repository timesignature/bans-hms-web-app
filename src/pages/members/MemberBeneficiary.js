import InputComponent from "../../components/inputComponent";

export default function MemberBeneficiary({state}){
    return (
        <div>
            <div className="py-2 border-b border-gray-300">
                <span className="block text-sm font-bold">Beneficiary Details</span>
            </div>

            <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                <div>
                    <InputComponent
                        title={'First Name'}
                        value={state.FirstName}
                        readOnly
                    />
                </div>

                <div>
                    <InputComponent
                        title={'Surname'}
                        value={state.Surname}
                        readOnly
                    />
                </div>



                <div>
                    <InputComponent
                        title={'Initials'}
                        value={state.Initials}
                        readOnly

                    />
                </div>

                <div>
                    <InputComponent
                        title={'Title'}
                        value={state.Title}
                        readOnly
                    />
                </div>

                <div>
                    <InputComponent
                        title={'Date of birth'}
                        value={state.DateOfBirth}
                        readOnly
                    />
                </div>

                <div>
                    <InputComponent
                        title={'Gender'}
                        value={state.Gender}
                        readOnly
                    />
                </div>



                <div>
                    <InputComponent
                        title={'Employer Group'}
                        value={state.EmployerGroup}
                        readOnly
                    />
                </div>

                <div>
                    <InputComponent
                        title={'Joining Date'}
                        value={state.JoinDate}
                        readOnly
                    />
                </div>



                <div>
                    <InputComponent
                        title={'Marital Status'}
                        value={state.MaritalStatus}
                        readOnly
                    />
                </div>


                <div>
                    <InputComponent
                        title={'National ID'}
                        value={state.NationalIDNumber}
                        readOnly
                    />
                </div>





            </div>

            <div className="mt-5">

            </div>
        </div>
    )
}
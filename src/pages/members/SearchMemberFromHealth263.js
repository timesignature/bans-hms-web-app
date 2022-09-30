import {useState} from "react";
import toast from "react-hot-toast";
import X2JS from 'x2js'
import MemberBeneficiary from "./MemberBeneficiary";
import MemberContact from "./MemberContact";
import MemberAddress from "./MemberAddress";
import SaveMemberToHMS from "./SaveMemberToHMS";
import MemberMedical from "./MemberMedical";


var x2js = new X2JS();

export default function SearchMemberFromHealth263(){

    const formatedNID=(d)=>{
        if(d.length>0){
            var f=d.slice(0,2)+"-"+d.slice(2,8)+"-"+d.slice(8,11)
            return f
        }
        return ''
    }

    const formatGender=(d)=>{

        if(d.toString()==='F'){
            return 'Female'
        }
        return 'Male'
    }


    const [member,setMember]=useState('')


    const [m,setM]=useState({
        Surname: '',
        Name: '',
        I_D_Not_Available: false,
        National_ID_No: '',
        // Date_of_Birth: data.DateOfBirth,
        Title: '',
        Gender: '',
        Religion: "",
        Language: 'Shona',
        Occupation: "",
        Current_Medical_Aid_Type: "None",
        Medical_Aid_to_Use: "",
        Balance: 0,
        Balance_Medical_Aid: 0,
        Balance_Due: 0,
        Personal_Limit: 0,
        Type: "Normal",
        Blocked: "",
        Details_to_Be_Printed_x003F_: false,
        Address: "",
        Address_2: "",
        City: "Harare",
        Country_Region_Code: "",
        Phone_No: '',
        Cell_Phone_No: '',
        Fax_No: "",
        E_Mail: "",
        Home_Page: "",
        Bill_to_Name: "",
        Bill_Address: "",
        Bill_Phone: "",
        Private_Patient: false,
        Medical_Aid_No: '',
        Medical_Aid_Scheme: "",
        Medical_Aid_Adress: "",
        Medical_Aid_Phone: "",
        Patient_Suffix: "",
        Relationship_to_Member: "",
        Medical_Aid_Member_No: '',
        Gen_Bus_Posting_Group: "",
        VAT_Bus_Posting_Group: "",
        Customer_Posting_Group: "",
        Customer_Price_Group: "",
        Customer_Disc_Group: "",
        Allow_Line_Disc: true,
        Prices_Including_VAT: false,
        Medical_Aid_Member_Name: "",
        Medical_Aid_Member_Address: "",
        Medical_Aid_Member_Cell_No: "",
        Application_Method: "Manual",
        Payment_Terms_Code: "",
        Reminder_Terms_Code: "",
        Fin_Charge_Terms_Code: "",
        Currency_Code: "",
        Print_Statements: false,
        Last_Statement_No: 0,
        Block_Payment_Tolerance: false,
        Attending_Doctor: "",
        Referring_Doctor: "",
        Anaesthetist: "",
    })

    const [state,setState]=useState({
        member_no:'',
        FirstName:'',
        BenefitDate:'',
        DateOfBirth:'',
        EmployerGroup:'',
        Gender:'',
        Initials:'',
        JoinDate:'',
        Language:'',
        MaritalStatus:'',
        NationalIDNumber:'',
        Surname:'',
        Title:'',
        Work:'',
        MobilePrimary:'',
        Address:[],
        MemberShipNumber:'',
    })

    const [loading,setLoading]=useState(false)



    const postData=()=>{


        if(member.length===0){
            toast.custom(()=>(
                <div className='font-mont bg-orange-600 text-white max-w-[300px] p-5 rounded'>
                    <span>
                        Member number is required
                    </span>
                </div>
            ),)
            return
        }



        setLoading(true)

        var xhr = new XMLHttpRequest();
        xhr.open(
        'POST',
        'apacewebservices/AMF1_0?wsdl',
        true
        );


        var src=`<x:Envelope 
    xmlns:x="http://schemas.xmlsoap.org/soap/envelope/"
    xmlns:apa="http://apace.systems/apacewebservices/"
    xmlns:urn="urn:apace:member:format:1.0">
    <x:Header>
        <apa:secureToken>eb4eeb1e9e03493e2d1db0e524c7da98f0bb2a11ad991335d0ee038560704906</apa:secureToken>
    </x:Header>
\t
\t
<x:Body xmlns:x="http://schemas.xmlsoap.org/soap/envelope/">
    <apa:process xmlns:apa="http://apace.systems/apacewebservices/">
        <apa:request>
            <urn:Member xmlns:urn="urn:apace:member:format:1.0">
                <urn:Request>
                    <urn:Transaction>
                        <urn:VersionNumber>1.0</urn:VersionNumber>
                        <urn:Number>24892348345</urn:Number>
                        <urn:SystemIdentifier>WCHMS</urn:SystemIdentifier>
                        <urn:DestinationCode>CMPUZWA</urn:DestinationCode>
                        <urn:ClientCountryCode>ZW</urn:ClientCountryCode>
                        <urn:Timestamp TimeZone="Africa/Harare">20211124153406</urn:Timestamp>
                        <urn:TestIndicator>Y</urn:TestIndicator>
                        <urn:User>698437/mziwani</urn:User>
                    </urn:Transaction>
                    <urn:MembershipLookup>
                        <urn:IncludeDetail>Y</urn:IncludeDetail>
                        <urn:Funder>CMPUZW</urn:Funder>
                        <urn:WithMembershipNumber>
                            <urn:MembershipNumber>${member}</urn:MembershipNumber>
                            <urn:DependentCode>00</urn:DependentCode>
                        </urn:WithMembershipNumber>
                    </urn:MembershipLookup>
                </urn:Request>
            </urn:Member>
        </apa:request>
    </apa:process>
</x:Body>
</x:Envelope>`;

        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');






        xhr.onreadystatechange = () => {// Call a function when the state changes.
            setLoading(false)
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {


                const json=x2js.xml2js(xhr.responseText.toString())

                const x=json.Envelope
                    .Body
                    .processResponse
                    .response
                    .Member
                    .Response



                const msg=x
                    .Message


                if(msg.length>=2){
                    toast.custom(()=>(
                        <div className='font-mont bg-orange-600 text-white max-w-[300px] p-5 rounded'>
                            <span>
                                Member number entered is not found
                            </span>
                        </div>
                    ),)

                    return
                }



                toast.custom(()=>(
                    <div className='font-mont bg-green-600 text-white max-w-[300px] p-5 rounded'>
                            <span>
                                Member found from health 263
                            </span>
                    </div>
                ),)

                const d=x?.Membership?.Beneficiary







                //beneficiaryDetails

                const data=d?.BeneficiaryDetail
                const FirstName=data?.FirstName?.toString() ?? ''
                const BenefitDate=data?.BenefitDate?.toString() ?? ''
                const DateOfBirth=data?.DateOfBirth?.toString() ?? ''
                const EmployerGroup=data?.EmployerGroup?.toString() ?? ''
                const Gender=data?.Gender?.toString() ?? ''
                const Initials=data?.Initials?.toString() ?? ''
                const JoinDate=data?.JoinDate?.toString() ?? ''
                const Language=data?.Language?.toString() ?? ''
                const MaritalStatus=data?.MaritalStatus?.toString() ?? ''
                const NationalIDNumber=data?.NationalIDNumber?.toString() ?? ''
                const Surname=data?.Surname?.toString() ?? ''
                const Title=data?.Title?.toString() ?? ''



                //contacts details

                const contact=d?.ContactDetail;
                const Work=contact.Work?.toString() ?? ''
                const MobilePrimary=contact.MobilePrimary?.toString() ?? ''



                const MemberShipNumber=x?.Membership?.MembershipNumber?.toString() ?? ''
                const MemberNo=''




                const Address=d?.Address ?? []



                setState(prev=>{
                    return {
                        ...prev,
                        FirstName,
                        BenefitDate,
                        DateOfBirth,
                        EmployerGroup,
                        Gender,
                        Initials,
                        JoinDate,
                        Language,
                        MaritalStatus,
                        NationalIDNumber,
                        Surname,
                        Title,
                        Work,
                        MobilePrimary,
                        Address,
                        MemberShipNumber,
                    }
                })


                setM(prev=>({
                    Surname: Surname,
                    Name: FirstName,
                    I_D_Not_Available: false,
                    National_ID_No: formatedNID(NationalIDNumber),
                    // Date_of_Birth: data.DateOfBirth,
                    Title: Title,
                    Gender: formatGender(Gender),
                    Religion: "",
                    Language: Language,
                    Occupation: "",
                    Current_Medical_Aid_Type: "None",
                    Medical_Aid_to_Use: "",
                    Balance: 0,
                    Balance_Medical_Aid: 0,
                    Balance_Due: 0,
                    Personal_Limit: 0,
                    Type: "Patient",
                    Blocked: "",
                    Details_to_Be_Printed_x003F_: false,
                    Address: "",
                    Address_2: "",
                    City: "Harare",
                    Country_Region_Code: "",
                    Phone_No: '',
                    Cell_Phone_No: '',
                    Fax_No: "",
                    E_Mail: "",
                    Home_Page: "",
                    Bill_to_Name: "",
                    Bill_Address: "",
                    Bill_Phone: "",
                    Private_Patient: false,
                    // Medical_Aid_No: '',
                    // Medical_Aid_Scheme: "",
                    // Medical_Aid_Adress: "",
                    // Medical_Aid_Phone: "",
                    Patient_Suffix: "",
                    Relationship_to_Member: "",
                    Medical_Aid_Member_No: member,
                    Gen_Bus_Posting_Group: "",
                    VAT_Bus_Posting_Group: "",
                    Customer_Posting_Group: "",
                    Customer_Price_Group: "",
                    Customer_Disc_Group: "",
                    Allow_Line_Disc: true,
                    Prices_Including_VAT: false,
                    Medical_Aid_Member_Name: "",
                    Medical_Aid_Member_Address: "",
                    Medical_Aid_Member_Cell_No: "",
                    Application_Method: "Manual",
                    Payment_Terms_Code: "",
                    Reminder_Terms_Code: "",
                    Fin_Charge_Terms_Code: "",
                    Currency_Code: "",
                    Print_Statements: false,
                    Last_Statement_No: 0,
                    Block_Payment_Tolerance: false,
                    Attending_Doctor: "",
                    Referring_Doctor: "",
                    Anaesthetist: "",
                }))








            }
        }
        xhr.send(src);


    }

    return (
        <div className='min-h-screen'>

            <div className="container mx-auto px-20">

                <div className="py-10">
                    <span className="block text-4xl font-light">Member Registration (201000594)</span>

                </div>


                <div className="py-10 flex items-center justify-between space-x-5 mt-10">
                    <input
                        type="text"
                        placeholder='Enter Member No'
                        value={member}
                        onChange={(val)=>setMember(val.target.value)}
                        className="flex-1 bg-transparent rounded py-4 px-3 text-xs focus:outline-none border border-gray-300"
                    />
                    <button onClick={postData} className="px-4 py-3 bg-gray-200 text-xs rounded">{
                        loading ? '...Getting member details from health 263' : 'Get member details from health 263'
                    }</button>
                </div>



                <div className="mt-5">
                    <MemberMedical state={m} setState={setM}/>
                </div>



                <div className="mt-5">
                    <MemberBeneficiary state={state}/>
                </div>


                <div className="mt-5">
                    {
                        state.Address.map((d,i)=>(
                            <div key={i} className='mt-5'>
                                <MemberAddress state={d}/>
                            </div>
                        ))
                    }
                </div>


                <div className="mt-5">
                    <MemberContact state={state}/>
                </div>


                <SaveMemberToHMS data={m}/>




            </div>

            <div className="py-20"></div>

        </div>
    )
}
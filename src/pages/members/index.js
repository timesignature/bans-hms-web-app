import SearchMemberFromSystem from "./SearchMemberFromSystem";
import SearchMemberFromHealth263 from "./SearchMemberFromHealth263";
import {useStatusProvider} from "../../providers/StatusProvider";
import Menu from "./Menu";
export default function Members(){


    const {status}=useStatusProvider() //default, found and not_found



    return (
        <div className='min-h-screen bg-white font-roboto'>
            {
                status==='default'
                    ? (
                        <SearchMemberFromSystem/>
                    )
                    : status==='found'
                    ? (
                        <Menu/>
                    ) : status==='not_found' ? (
                        <SearchMemberFromHealth263/>
                    ) : (
                        <SearchMemberFromSystem/>
                        )
            }

        </div>
    )
}
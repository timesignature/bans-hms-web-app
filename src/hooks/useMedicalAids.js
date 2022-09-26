import {useQuery} from "@tanstack/react-query";
import axios from "axios";

export default function useMedicalAids(){
    return useQuery(['medical-aids'],
        ()=>axios.get(`/MedicalAidList`,{
            baseURL:`http://desktop-garljai:7048/BC130/ODataV4/Company('Baines Avenue Clinic')`,
            auth:{
                username:'shelton',
                password:'33552211Tembo*'
            }
    }).then(res=>res.data.value))
}
import { StafData } from "../../Data/StaffData"
import Tables from "../../table/Table"

function StaffData(){
    return (
        <>
        <h1>StaffData Table...!</h1>
        <Tables heading={Object.keys(StafData[0])} data={StafData}/>
        </>
    )
}
export default StaffData
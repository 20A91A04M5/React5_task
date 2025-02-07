import { StudentsData } from "../../Data/StudentData"
import Tables from "../../table/Table"

function Students(){
    return (
        <>
        <h1>Students Table...!</h1>
        <Tables heading={Object.keys(StudentsData[0])} data={StudentsData} />
        </>
    )
}
export default Students
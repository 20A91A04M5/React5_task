
function Tables({heading,data}){
    return (
        <div>
            <table border="1">
                <thead>
                    <tr>
                        {heading.map((head,index) => <th key={index}>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row,index) => (
                        <tr key={index}>
                            {heading.map((head,index) => <td key={index}>{row[head]?row[head]:" N/A "}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Tables
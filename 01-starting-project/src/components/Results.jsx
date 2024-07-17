import { calculateInvestmentResults, formatter } from "../util/investment"
export default function Results({input}){
    const resultData = calculateInvestmentResults(input);
    console.log(resultData);
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Inevsted Capital</th>
                
            </tr>
        </thead>
        <tbody>
            {resultData.map(Data=>{
                return <tr key={Data.year}>
                    <td>{Data.year}</td>
                    <td>{formatter.format(Data.valueEndOfYear)}</td>
                    <td>{formatter.format(Data.interest)}</td>
                    <td>  </td>
                </tr>
            })}
        </tbody>
    </table>;
}
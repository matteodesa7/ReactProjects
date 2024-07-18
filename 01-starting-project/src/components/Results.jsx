import { calculateInvestmentResults, formatter } from "../util/investment"
export default function Results({input}){
    const resultData = calculateInvestmentResults(input);
    const initialInvestment = resultData[0].valueEndOfYear - resultData[0].interest - resultData[0].annualInvestment;
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
            {resultData.map (Data=> {
                const totalInterest = Data.valueEndOfYear - Data.annualInvestment * Data.year - initialInvestment;
                const totalAmountInvested = Data.valueEndOfYear - totalInterest;
                return <tr key={Data.year}>
                    <td>{Data.year}</td>
                    <td>{formatter.format(Data.valueEndOfYear)}</td>
                    <td>{formatter.format(Data.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            } ) }
        </tbody>
    </table>;
}
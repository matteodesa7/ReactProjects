import logo from '../assets/investment-calculator-logo.png'
export default function Header(){
    return <header id='header'>
        <img src={logo} alt="Logo showing a money back" />
        <h1>Investment Claculator</h1>
    </header>;
}
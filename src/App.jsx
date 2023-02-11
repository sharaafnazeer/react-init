import logo from './logo.svg';
import './App.css';
import WelcomeText from "./components/WelcomeText";
import HeaderText from "./components/HeaderText";
import HeaderImage from "./components/HeaderImage";
import Copyrights from "./components/Copyrights";

function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <HeaderText/>
                    <HeaderImage />
                    <WelcomeText/>
                </header>

                <Copyrights />
            </div>
        </>
    );
}

export default App;

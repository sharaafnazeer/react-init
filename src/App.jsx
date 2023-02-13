import logo from './logo.svg';
import './App.css';
import WelcomeText from "./components/WelcomeText";
import HeaderText from "./components/HeaderText";
import HeaderImage from "./components/HeaderImage";
import Copyrights from "./components/Copyrights";
import Footer from "./components/Footer";
import Counter from "./components/Counter";

function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <HeaderText/>

                    <Counter/>
                    {/*<HeaderImage/>*/}
                    <WelcomeText/>
                </header>
                <Footer/>
                <Copyrights/>
            </div>
        </>
    );
}

export default App;




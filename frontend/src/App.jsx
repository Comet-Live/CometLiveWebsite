import WebNavbar from "./components/WebNavbar";
import PhoneModel from "./components/PhoneModel";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="hidden md:block">
                <WebNavbar />
            </div>
            <div className="flex-grow flex">
                <div className="w-1/2 flex items-center justify-center">
                    <PhoneModel />
                </div>
                <div className="w-1/2 flex items-center justify-center">
                    <h1 className="text-4xl font-bold">Comet Live</h1>
                </div>
            </div>
        </div>
    );
}

export default App;

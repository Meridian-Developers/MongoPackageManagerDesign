import "./App.css";
import Dashboard from "./widgets/Dashboard";
import PackageEditor from "./widgets/PackageEditor";

function App() {
    const page = localStorage.getItem("page") || "dashboard";

    switch (page) {
        case "dashboard":
            return (
                <div>
                    <Dashboard />
                </div>
            );
        case "package":
            return (
                <div>
                    <PackageEditor />
                </div>
            );
    }
}

export default App;

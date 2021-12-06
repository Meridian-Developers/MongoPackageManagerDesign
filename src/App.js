import "./App.css";
import Dashboard from "./widgets/Dashboard";
import PackageEditor from "./widgets/PackageEditor";
import PackageCompare from "./widgets/PackageCompare";

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
        case "compare":
            return (
                <div>
                    <PackageCompare />
                </div>
            );
    }
}

export default App;

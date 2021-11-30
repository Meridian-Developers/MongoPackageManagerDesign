import "../styles/Dashboard.css";
import PackageList from "../components/PackageList";
import Button from "../components/Button";
import Input from "../components/Input";
import { AiOutlineSearch } from "react-icons/ai";

function Dashboard() {
    function renderHeader() {
        return <div className="widget-header">Mongo Package Manager</div>;
    }

    function renderBody() {
        return (
            <div>
                {renderButtons()}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginTop: "10px",
                        marginBottom: "10px",
                        cursor: "pointer",
                    }}
                >
                    <Input style={{ width: "45%" }} placeholder="Search" />
                    <AiOutlineSearch size={28} />
                </div>
                <PackageList />
            </div>
        );
    }

    function renderButtons() {
        return (
            <div>
                <Button
                    onClick={() => {
                        localStorage.setItem("page", "package");
                        localStorage.setItem("package", null);
                        window.location = "";
                    }}
                >
                    Create Package
                </Button>
            </div>
        );
    }

    return (
        <div className="widget-wrapper">
            {renderHeader()}
            {renderBody()}
        </div>
    );
}

export default Dashboard;

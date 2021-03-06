import "react-dropdown/style.css";
import "../styles/PackageEditor.css";
import Button from "../components/Button";
import Input from "../components/Input";
import moment from "moment";
import Dropdown from "react-dropdown";
import { BiSync, BiPaperPlane, BiSave, BiReply } from "react-icons/bi";
import { MdChecklistRtl, MdDeleteForever } from "react-icons/md";
import _ from "lodash";

const optionStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
};

const iconStyle = {
    marginRight: "5px",
};

let options = [
    <div style={optionStyle}>
        <BiSync style={iconStyle} /> Sync
    </div>,
    <div style={optionStyle}>
        <MdChecklistRtl style={iconStyle} /> Approve
    </div>,
    <div style={optionStyle}>
        <MdDeleteForever style={iconStyle} /> Archive
    </div>,
];

function PackageEditor() {
    const pkg = JSON.parse(localStorage.getItem("package")) || {};
    const packages = pkg.packages || [];

    if (!pkg || !pkg.status) {
        options = [
            <div style={optionStyle}>
                <BiSave style={iconStyle} /> Save
            </div>,
        ];
    }

    if (pkg && (pkg.status === "Approved" || pkg.status === "Deployed")) {
        options[1] = (
            <div style={optionStyle}>
                <BiPaperPlane style={iconStyle} /> Deploy
            </div>
        );
    } else if (pkg && pkg.status === "Cancelled") {
        options[1] = (
            <div style={optionStyle}>
                <BiReply style={iconStyle} /> Reopen
            </div>
        );
        delete options[2];
    }

    function renderHeader() {
        return <div className="widget-header">Mongo Package Editor</div>;
    }

    function renderDescFields() {
        return (
            <div style={{ marginTop: "10px" }}>
                <div>
                    <Input
                        style={{ width: "-webkit-fill-available" }}
                        placeholder="Package Name"
                        defaultValue={pkg.packageName}
                    />
                    <textarea
                        style={{
                            background: "none",
                            width: "-webkit-fill-available",
                            maxHeight: "300px",
                            minHeight: "100px",
                            maxWidth: "-webkit-fill-available",
                            marginTop: "10px",
                            padding: "5px",
                        }}
                        placeholder="Description"
                        defaultValue={pkg.desc}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginTop: "10px",
                    }}
                >
                    <Input
                        style={{
                            width: "-webkit-fill-available",
                            marginRight: "20px",
                        }}
                        placeholder="Created At"
                        defaultValue={pkg.createdAt || moment().format()}
                        disabled
                    />
                    <Input
                        style={{ width: "-webkit-fill-available" }}
                        placeholder="Status"
                        defaultValue={pkg.status || "N/A"}
                        disabled
                    />
                </div>
            </div>
        );
    }

    function renderActionField() {
        return (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <div style={{ width: "200px" }}>
                    <Dropdown
                        className="drop"
                        controlClassName="dropControl"
                        menuClassName="dropMenu"
                        options={options}
                        placeholder="Actions"
                    />
                </div>
            </div>
        );
    }

    function renderPackageList() {
        return (
            <div style={{ marginTop: "20px" }}>
                <div style={{ marginBottom: "5px" }}>Package List</div>
                <table className="package-table">
                    <tr className="package-table-header">
                        <th className="package-table-header-cell">
                            Collection
                        </th>
                        <th className="package-table-header-cell">Key</th>
                        <th className="package-table-header-cell">Client</th>
                    </tr>
                    {_.map(packages, (pack) => {
                        return (
                            <tr className="package-table-row">
                                <td className="package-table-row-cell">
                                    {pack.collection}
                                </td>
                                <td className="package-table-row-cell">
                                    {pack.key}
                                </td>
                                <td className="package-table-row-cell">GUC</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        );
    }

    function renderBody() {
        return (
            <div style={{ marginTop: "10px", marginBottom: "20px" }}>
                {renderActionField()}
                {renderDescFields()}
                {renderPackageList()}
            </div>
        );
    }

    function renderFooter() {
        return (
            <div>
                <Button
                    onClick={() => {
                        localStorage.setItem("page", "dashboard");
                        window.location = "";
                    }}
                >
                    Back
                </Button>
            </div>
        );
    }

    return (
        <div className="widget-wrapper">
            {renderHeader()}
            {renderBody()}
            {renderFooter()}
        </div>
    );
}

export default PackageEditor;

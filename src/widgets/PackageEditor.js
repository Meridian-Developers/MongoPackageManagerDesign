import "react-dropdown/style.css";
import "../styles/PackageEditor.css";
import Button from "../components/Button";
import Input from "../components/Input";
import moment from "moment";
import Dropdown from "react-dropdown";
import { BiSync, BiPaperPlane, BiSave, BiReply } from "react-icons/bi";
import { MdChecklistRtl, MdDeleteForever } from "react-icons/md";
import _ from "lodash";
import React, { useState } from "react";
import Modal from "react-modal";
const crypto = require("crypto");

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
    const [packages, setPackages] = useState([pkg.packages || []]);
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
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            width: "-webkit-fill-available",
                            marginRight: "20px",
                        }}
                    >
                        <div className="editor-label">Package Name</div>
                        <Input
                            style={{ width: "-webkit-fill-available" }}
                            placeholder="Package Name"
                            defaultValue={pkg.packageName}
                        />
                    </div>
                    <div style={{ width: "-webkit-fill-available" }}>
                        <div className="editor-label">Status</div>
                        <Input
                            style={{ width: "-webkit-fill-available" }}
                            placeholder="Status"
                            defaultValue={pkg.status || "N/A"}
                            disabled
                        />
                    </div>
                </div>
                <div>
                    <div className="editor-label" style={{ marginTop: "10px" }}>
                        Description
                    </div>
                    <textarea
                        style={{
                            background: "none",
                            width: "-webkit-fill-available",
                            maxHeight: "300px",
                            minHeight: "100px",
                            maxWidth: "-webkit-fill-available",
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
                    <div
                        style={{
                            width: "-webkit-fill-available",
                            marginRight: "20px",
                        }}
                    >
                        <div className="editor-label">Created At</div>
                        <Input
                            style={{
                                width: "-webkit-fill-available",
                            }}
                            placeholder="Created At"
                            defaultValue={pkg.createdAt || moment().format()}
                            disabled
                        />
                    </div>
                    <div style={{ width: "-webkit-fill-available" }}>
                        <div className="editor-label">Last Modified</div>
                        <Input
                            style={{
                                width: "-webkit-fill-available",
                                marginRight: "20px",
                            }}
                            placeholder="Last Modified"
                            defaultValue={pkg.lastModified || moment().format()}
                            disabled
                        />
                    </div>
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
                <div style={{ marginBottom: "5px" }}>
                    Package List{" "}
                    {!pkg.packages && (
                        <Button
                            style={{
                                width: "25%",
                                textAlign: "center",
                                display: "inline",
                                paddingLeft: "10px",
                            }}
                            onClick={() => {
                                setPackages(
                                    packages.concat({
                                        collection: "N/A",
                                        key: "N/A",
                                        body: {
                                            _id:
                                                crypto
                                                    .randomBytes(16)
                                                    .toString("hex") + "rsj",
                                            contentName: "PasswordResetEmail",
                                            contentType: "notification",
                                            siteName: "GUC",
                                            html: '<p>To reset your Greenville Utilities My Account password, <a href="${url}">Click here.</a> If you do not want to change your password, please disregard this message.</p>',
                                            subject: "Password Reset",
                                        },
                                    })
                                );
                            }}
                        >
                            click me
                        </Button>
                    )}
                </div>
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
                            <tr
                                className="package-table-row"
                                onClick={() => {
                                    if (pkg.packages) {
                                        window.localStorage.setItem(
                                            "page",
                                            "compare"
                                        );
                                        window.location.href = "";
                                    } else {
                                        <Modal
                                            isOpen={true}
                                            style={{
                                                overlay: {
                                                    backgroundColor:
                                                        "rgb(192,192,192,0.5)",
                                                },
                                                content: {
                                                    top: "50",
                                                    left: "50",
                                                    width: 400,
                                                    borderRadius: 10,
                                                    textAlign: "center",
                                                    height: "50",
                                                    backgroundColor: "white",
                                                },
                                            }}
                                            contentLabel="Message"
                                        >
                                            test
                                        </Modal>;
                                    }
                                }}
                            >
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

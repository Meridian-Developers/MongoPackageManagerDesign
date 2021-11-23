import "../styles/PackageList.css";
import moment from "moment";
import _ from "lodash";
import Button from "./Button";

const headers = [
    { label: "Package Name", key: "packageName" },
    { label: "Created", key: "createdAt" },
    { label: "Description", key: "desc" },
    { label: "Status", key: "status" },
];

const rows = [
    {
        packageName: "Test Package 1",
        createdAt: moment("2021-01-21", "YYYY-MM-DD").format(),
        desc: "A package created for an example.",
        status: "Needs Approval",
        packages: [
            {
                collection: "contents",
                key: "Logo",
                body: {
                    _id: "bshbv9sbhg9842fhdhjc",
                    contentName: "Logo",
                    siteName: "GUC",
                    html: '<div  style="background: linear-gradient(to right,#169c93 0%,#8de2dc 42%,#8de2dc 52%,#1780be 100%); width:102%; height:110%; position:relative; "> <img style=" margin-top: 30px; margin-left:100px; margin-bottom:20px; padding-left:16px; maxWidth:1600px; position:absolute; " src="https://www.guc.com/sites/all/themes/vc3/img/logo-new.png"> <div style="float:right; margin-top:90px; margin-right: 20px; border:0; border-radius: 2px; background: rgba(255,255,255,0.4);"><input title="Enter the terms you wish to search for." type="text"  size="15" maxlength="128" style=" width: 300px; height: 40px;  placeholder="How can we help?"><input type="button"></input></div></div>',
                },
            },
            {
                collection: "contents",
                key: "PasswordResetEmail",
                body: {
                    _id: "43g3asdg33gavshsg",
                    contentName: "PasswordResetEmail",
                    contentType: "notification",
                    siteName: "GUC",
                    html: '<p>To reset your Greenville Utilities My Account password, <a href="${url}">Click here.</a> If you do not want to change your password, please disregard this message.</p>',
                    subject: "Password Reset",
                },
            },
        ],
    },
    {
        packageName: "Test Package 2",
        createdAt: moment("2021-04-21", "YYYY-MM-DD").format(),
        desc: "A package created for an example.",
        status: "Approved",
        packages: [
            {
                collection: "contents",
                key: "Logo",
                body: {
                    _id: "bshbv9sbhg9842fhdhjc",
                    contentName: "Logo",
                    siteName: "GUC",
                    html: '<div  style="background: linear-gradient(to right,#169c93 0%,#8de2dc 42%,#8de2dc 52%,#1780be 100%); width:102%; height:110%; position:relative; "> <img style=" margin-top: 30px; margin-left:100px; margin-bottom:20px; padding-left:16px; maxWidth:1600px; position:absolute; " src="https://www.guc.com/sites/all/themes/vc3/img/logo-new.png"> <div style="float:right; margin-top:90px; margin-right: 20px; border:0; border-radius: 2px; background: rgba(255,255,255,0.4);"><input title="Enter the terms you wish to search for." type="text"  size="15" maxlength="128" style=" width: 300px; height: 40px;  placeholder="How can we help?"><input type="button"></input></div></div>',
                },
            },
            {
                collection: "contents",
                key: "PasswordResetEmail",
                body: {
                    _id: "43g3asdg33gavshsg",
                    contentName: "PasswordResetEmail",
                    contentType: "notification",
                    siteName: "GUC",
                    html: '<p>To reset your Greenville Utilities My Account password, <a href="${url}">Click here.</a> If you do not want to change your password, please disregard this message.</p>',
                    subject: "Password Reset",
                },
            },
        ],
    },
    {
        packageName: "Test Package 3",
        createdAt: moment("2021-06-21", "YYYY-MM-DD").format(),
        desc: "A package created for an example.",
        status: "Deployed",
        packages: [
            {
                collection: "contents",
                key: "Logo",
                body: {
                    _id: "bshbv9sbhg9842fhdhjc",
                    contentName: "Logo",
                    siteName: "GUC",
                    html: '<div  style="background: linear-gradient(to right,#169c93 0%,#8de2dc 42%,#8de2dc 52%,#1780be 100%); width:102%; height:110%; position:relative; "> <img style=" margin-top: 30px; margin-left:100px; margin-bottom:20px; padding-left:16px; maxWidth:1600px; position:absolute; " src="https://www.guc.com/sites/all/themes/vc3/img/logo-new.png"> <div style="float:right; margin-top:90px; margin-right: 20px; border:0; border-radius: 2px; background: rgba(255,255,255,0.4);"><input title="Enter the terms you wish to search for." type="text"  size="15" maxlength="128" style=" width: 300px; height: 40px;  placeholder="How can we help?"><input type="button"></input></div></div>',
                },
            },
            {
                collection: "contents",
                key: "PasswordResetEmail",
                body: {
                    _id: "43g3asdg33gavshsg",
                    contentName: "PasswordResetEmail",
                    contentType: "notification",
                    siteName: "GUC",
                    html: '<p>To reset your Greenville Utilities My Account password, <a href="${url}">Click here.</a> If you do not want to change your password, please disregard this message.</p>',
                    subject: "Password Reset",
                },
            },
        ],
    },
    {
        packageName: "Test Package 4",
        createdAt: moment("2021-09-21", "YYYY-MM-DD").format(),
        desc: "A package created for an example.",
        status: "Cancelled",
        packages: [
            {
                collection: "contents",
                key: "Logo",
                body: {
                    _id: "bshbv9sbhg9842fhdhjc",
                    contentName: "Logo",
                    siteName: "GUC",
                    html: '<div  style="background: linear-gradient(to right,#169c93 0%,#8de2dc 42%,#8de2dc 52%,#1780be 100%); width:102%; height:110%; position:relative; "> <img style=" margin-top: 30px; margin-left:100px; margin-bottom:20px; padding-left:16px; maxWidth:1600px; position:absolute; " src="https://www.guc.com/sites/all/themes/vc3/img/logo-new.png"> <div style="float:right; margin-top:90px; margin-right: 20px; border:0; border-radius: 2px; background: rgba(255,255,255,0.4);"><input title="Enter the terms you wish to search for." type="text"  size="15" maxlength="128" style=" width: 300px; height: 40px;  placeholder="How can we help?"><input type="button"></input></div></div>',
                },
            },
            {
                collection: "contents",
                key: "PasswordResetEmail",
                body: {
                    _id: "43g3asdg33gavshsg",
                    contentName: "PasswordResetEmail",
                    contentType: "notification",
                    siteName: "GUC",
                    html: '<p>To reset your Greenville Utilities My Account password, <a href="${url}">Click here.</a> If you do not want to change your password, please disregard this message.</p>',
                    subject: "Password Reset",
                },
            },
        ],
    },
];

function PackageList() {
    function renderTable(headers, rows) {
        return (
            <table className="package-table">
                <tr className="package-table-header">
                    {_.map(headers, (header) => {
                        return renderTableHeader(header);
                    })}
                </tr>
                {_.map(rows, (row) => {
                    return renderTableRow(headers, row);
                })}
            </table>
        );
    }

    function renderTableHeader(header) {
        return <th className="package-table-header-cell">{header.label}</th>;
    }

    function renderTableRow(headers, row) {
        return (
            <tr
                className="package-table-row"
                onClick={() => {
                    localStorage.setItem("page", "package");
                    localStorage.setItem("package", JSON.stringify(row));
                    window.location = "";
                }}
            >
                {_.map(headers, (header) => {
                    return (
                        <td className="package-table-row-cell">
                            {row[header.key] || "N/A"}
                        </td>
                    );
                })}
            </tr>
        );
    }

    function renderButtons() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                }}
            >
                <Button>Previous</Button>
                <div>1 of 1</div>
                <Button>Next</Button>
            </div>
        );
    }

    return (
        <div className="package-list-wrapper">
            {renderTable(headers, rows)}
            {renderButtons()}
        </div>
    );
}

export default PackageList;

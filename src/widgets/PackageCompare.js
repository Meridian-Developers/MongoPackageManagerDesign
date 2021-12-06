import React, { useState } from "react";
import "../styles/PackageCompare.css";
import Button from "../components/Button";
import JSONViewer from "../components/JSONViewer";
import "react-dropdown/style.css";
import Dropdown from "react-dropdown";
import Input from "../components/Input";

const packageJSON = {
    _id: "bshbv9sbhg9842fhdhjc",
    contentName: "Logo",
    siteName: "GUC",
    html: '<div  style="background: linear-gradient(to right,#169c93 0%,#8de2dc 42%,#8de2dc 52%,#1780be 100%); width:102%; height:110%; position:relative; "> <img style=" margin-top: 30px; margin-left:100px; margin-bottom:20px; padding-left:16px; maxWidth:1600px; position:absolute; " src="https://www.guc.com/sites/all/themes/vc3/img/logo-new.png"> <div style="float:right; margin-top:90px; margin-right: 20px; border:0; border-radius: 2px; background: rgba(255,255,255,0.4);"><input title="Enter the terms you wish to search for." type="text"  size="15" maxlength="128" style=" width: 300px; height: 40px;  placeholder="How can we help?"><input type="button"></input></div></div>',
    test: {
        var1: "hello",
        var2: 1,
        var3: null,
        var4: [
            {
                var1: "hello1",
            },
            {
                var1: "hello2",
            },
            {
                var1: "hello3",
            },
        ],
    },
};

const configJSON = {
    _id: "bshbv9sbhg9842fhdhjc",
    contentName: "Logo",
    siteName: "GUC",
    html: '<div  style="background: linear-gradient(to right,#169c93 0%,#8de2dc 42%,#8de2dc 52%,#1780be 100%); width:102%; height:110%; position:relative; "> <img style=" margin-top: 30px; margin-left:100px; margin-bottom:20px; padding-left:16px; maxWidth:1600px; position:absolute; " src="https://www.guc.com/sites/all/themes/vc3/img/logo-new.png"> <div style="float:right; margin-top:90px; margin-right: 20px; border:0; border-radius: 2px; background: rgba(255,255,255,0.4);"><input title="Enter the terms you wish to search for." type="text"  size="15" maxlength="128" style=" width: 300px; height: 40px;  placeholder="How can we help?"></div></div>',
};
function PackageCompare() {
    const [compare, setCompare] = useState(configJSON);

    function renderHeader() {
        return <div className="widget-header">Mongo Package Compare</div>;
    }

    function renderBody() {
        return (
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                {renderInputFields()}
                {renderJSONCompare()}
            </div>
        );
    }

    function renderInputFields() {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginBottom: "10px",
                }}
            >
                <div style={{ width: "-webkit-fill-available" }}>
                    <Dropdown
                        className="drop"
                        controlClassName="dropControl"
                        menuClassName="dropMenu"
                        options={["DEV", "QA", "PROD"]}
                        placeholder="DEV"
                    />
                </div>
            </div>
        );
    }

    function renderJSONCompare() {
        if (!compare) {
            return (
                <div>
                    <JSONViewer
                        json={packageJSON}
                        style={{ padding: "10px" }}
                    />
                </div>
            );
        }
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    background: "rgb(37, 37, 37)",
                }}
            >
                <JSONViewer
                    json={packageJSON}
                    compare={compare}
                    style={{ padding: "10px" }}
                />
                <div
                    style={{
                        fontSize: "20px",
                        padding: "10px",
                        marginTop: "300px",
                        color: "white",
                    }}
                >
                    {">"}
                </div>
                <JSONViewer
                    json={compare}
                    compare={packageJSON}
                    style={{ padding: "10px" }}
                />
            </div>
        );
    }

    function renderFooter() {
        return (
            <div>
                <Button
                    onClick={() => {
                        localStorage.setItem("page", "package");
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

export default PackageCompare;

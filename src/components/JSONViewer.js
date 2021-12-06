import React, { useState } from "react";
import "../styles/JSONViewer.css";
import _ from "lodash";
import Highlighter from "react-highlight-words";

function JSONViewer(props) {
    function renderJSONBody(json, inner) {
        if (!json) {
            return <div>null</div>;
        }

        const keys = Object.keys(json);

        return (
            <div
                className="viewer-body-wrapper"
                style={{ marginLeft: inner ? "20px" : "0px" }}
            >
                {_.map(keys, (key) => {
                    let matches = true;
                    if (props.compare) {
                        matches = compareVariable(
                            json[key],
                            props.compare[key]
                        );
                    }

                    return renderJSONItem(
                        json,
                        key,
                        matches,
                        props.compare[key]
                    );
                })}
            </div>
        );
    }

    function renderJSONItem(json, key, matches, compare) {
        if (
            json[key] != null &&
            typeof json[key] === typeof {} &&
            !json[key].length
        ) {
            return (
                <div>
                    <div>
                        {" "}
                        <span
                            className={
                                matches ? "viewer-key" : "viewer-highlight"
                            }
                            style={{ color: matches ? "#d6c470" : null }}
                        >
                            {key}
                        </span>
                        : {"{"}
                    </div>
                    {renderJSONBody(json[key], true)}
                    <div>{"},"}</div>
                </div>
            );
        }

        let value = json[key] || "null";

        if (json[key] && typeof value === typeof "") {
            if (!matches) {
                if (compare) {
                    value = findStringDifference(value, compare);
                } else {
                    value = (
                        <Highlighter
                            highlightClassName="viewer-highlight"
                            searchWords={[value]}
                            autoEscape={true}
                            textToHighlight={value}
                        />
                    );
                }
            } else {
                value = '"' + value + '"';
            }
        } else if (!matches && typeof value !== typeof {}) {
            value = (
                <Highlighter
                    highlightClassName="viewer-highlight"
                    searchWords={[value + ""]}
                    autoEscape={true}
                    textToHighlight={value + ""}
                />
            );
        }

        if (typeof value === typeof [] && value.length > 0) {
            return (
                <div>
                    [
                    {_.map(value, (row) => {
                        if (typeof row === typeof {}) {
                            return (
                                <div>
                                    <div style={{ marginLeft: "5px" }}>
                                        {"{"}
                                    </div>
                                    {renderJSONBody(row, true)}
                                    <div style={{ marginLeft: "5px" }}>
                                        {"},"}
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div className="viewer-row">
                                    <span
                                        className="viewer-value"
                                        style={{
                                            color: determineValueColor(row),
                                        }}
                                    >
                                        {row}
                                    </span>
                                </div>
                            );
                        }
                    })}
                    ]
                </div>
            );
        }

        return (
            <div className="viewer-row">
                <span
                    className="viewer-key"
                    className={matches ? "viewer-key" : "viewer-highlight"}
                    style={{ color: matches ? "#d6c470" : null }}
                >
                    {key}
                </span>
                :{" "}
                <span
                    className="viewer-value"
                    style={{
                        color: determineValueColor(json[key]),
                    }}
                >
                    {value}
                </span>
            </div>
        );
    }

    return (
        <div className="viewer-wrapper" style={props.style}>
            {props.json ? renderJSONBody(props.json) : "N/A"}
        </div>
    );
}

function determineValueColor(value) {
    try {
        switch (typeof value) {
            case typeof "":
                return "#c98870";
            case typeof 1:
                return "#d6c470";
            case typeof true:
                return "#2566cb";
        }

        return "#2566cb";
    } catch (e) {
        console.log(e);
        return "#2566cb";
    }
}

function compareVariable(base, compare) {
    try {
        return base === compare;
    } catch (e) {
        console.log(e);
        return false;
    }
}

function findStringDifference(base, compare) {
    try {
        if (!base || !compare) {
            return base;
        }

        let differences = [];
        let found = null;
        const length =
            base.length > compare.length ? base.length : compare.length;

        for (let i = 0; i < length; i++) {
            let bCharAt = null;
            let cCharAt = null;

            if (i < base.length) {
                bCharAt = base.charAt(i);
            }
            if (i < compare.length) {
                cCharAt = compare.charAt(i);
            }

            if (bCharAt === cCharAt && found) {
                differences.push(found);
                found = null;
            }

            if (bCharAt != cCharAt) {
                if (!found) {
                    found = bCharAt;
                } else {
                    found += bCharAt;
                }
            }
        }
        if (found) {
            differences.push(found);
        }

        return (
            <Highlighter
                highlightClassName="viewer-highlight"
                searchWords={differences}
                autoEscape={true}
                textToHighlight={base}
            />
        );
    } catch (e) {
        console.log(e);
        return base;
    }
}

export default JSONViewer;

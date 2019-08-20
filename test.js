import test from "ava";
import * as pkg from "./package.json";
import { existsSync } from "fs";
import React from "react";
import { renderToString } from "react-dom/server";
import { XMasonry, XBlock } from "./dist/index.js";

const elementToTest = React.createElement(XMasonry, { maxColumns: 2 },
    React.createElement(XBlock, {}, [
        React.createElement("h1", {}, "Heading-1!"),
        React.createElement("div", {}, "Contents-1.")
    ]),
    React.createElement(XBlock, {}, [
        React.createElement("h1", {}, "Heading-2!"),
        React.createElement("div", {}, "Contents-2.")
    ]),
    React.createElement(XBlock, { width: 2 }, [
        React.createElement("h1", {}, "Heading-3!"),
        React.createElement("div", {}, "Contents-3.")
    ]),
    React.createElement(XBlock, { width: 5 }, [
        React.createElement("h1", {}, "Heading-4!"),
        React.createElement("div", {}, "Contents-4.")
    ])
);

test(`Package metadata corresponds to file locations`, async (it) => {

    it.is(true, existsSync(pkg.main));

});

test(`Server rendering renders contents`, (it) => {

    const string = renderToString(React.cloneElement(elementToTest));

    it.is(4, string.match(/Heading-/g).length);
    it.is(4, string.match(/Contents-/g).length);

});

test(`Assigns widths to XBlocks`, (it) => {

    const string = renderToString(React.cloneElement(elementToTest));

    it.is(4, string.match(/width:[0-9]+px/g).length);

});

test(`Correct widths applied`, (it) => {

    const string = renderToString(React.cloneElement(elementToTest));

    const widths = string.match(/width:[0-9]+px/g)
                         .map(s => +s.match(/[0-9]+/)[0])
                         .sort((a, b) => a - b);
    const oneColumnWidth = widths.reduce((min, v) => Math.min(min, v));

    it.deepEqual([1, 1, 2, 2], widths.map(w => w / oneColumnWidth));

});

test(`Property maxColumns applies properly`, (it) => {

    const string = renderToString(React.cloneElement(elementToTest));

    const widths = string.match(/width:[0-9]+px/g).map(s => +s.match(/[0-9]+/)[0]);
    const oneColumnWidth = widths.reduce((min, v) => Math.min(min, v));
    const maxAllowedColumnWidth = oneColumnWidth * 2;
    const hasLongColumns = widths.reduce((has, w) => has && w > maxAllowedColumnWidth, false);

    it.is(false, hasLongColumns);

});

test(`Applies "xmasonry-static" and "xblock-static" classes when rendered on the server`, (it) => {

    const string = renderToString(React.cloneElement(elementToTest));

    const classes = string.match(/xmasonry(?:-static)?|xblock(?:-static)?/g)
                          .filter((e, i, arr) => arr.indexOf(e) === i)
                          .sort((a, b) => a > b ? 1 : a < b ? -1 : 0);

    it.deepEqual(["xblock", "xblock-static", "xmasonry", "xmasonry-static"], classes);

});

// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Js_exn from "rescript/lib/es6/js_exn.js";
import * as ReactDom from "react-dom";
import * as Caml_option from "rescript/lib/es6/caml_option.js";

var $$Document = {};

var root = document.getElementById("root");

if (root !== undefined) {
  ReactDom.render(React.createElement("div", undefined, "Hello, World!"), Caml_option.valFromOption(root));
} else {
  Js_exn.raiseError("Root element #root couldn't be found");
}

export {
  $$Document ,
  
}
/* root Not a pure module */

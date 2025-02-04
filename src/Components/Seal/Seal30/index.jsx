/*import React, { useRef } from "react";
import "../Seal30/styles30.css";

function Seal30() {
  const nameRef = useRef(null);

  return (
    <div className="seal30stamp-container">
      <p
        id="sealName"
        className="text seal30dynamic-name"
        contentEditable
        suppressContentEditableWarning
        ref={nameRef}
      ></p>*/




import React, { useRef } from "react";
import "../Seal30/styles30.css";

function Seal29() {
  const roleRef = useRef(null);

  return (
    <div className="seal-container">
      <div className="seal29stamp">
        <span
          className="seal29role"
          contentEditable
          suppressContentEditableWarning
          ref={roleRef}
        >
        </span>      
      <p className="text seal30designation">Manager</p>
      <p className="text seal30emp-no">Emp. No. 12859</p>
      <p className="text seal30branch">Anakkatty Branch</p>
    </div>
    </div>
  );
}

export default Seal30;

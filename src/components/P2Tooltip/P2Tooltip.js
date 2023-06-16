import React, { useEffect } from "react";
// import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle";

export default function P2Tooltip(props) {
  // useEffect(() => {
  //   const tooltipTriggerList = document.querySelectorAll(
  //     '[data-bs-toggle="tooltip"]'
  //   );
  //   console.log(tooltipTriggerList);
  //   const tooltipList = [...tooltipTriggerList].map(
  //     (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  //   );
  // });

  return <>{props.children}</>;
}

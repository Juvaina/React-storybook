import { React, useState } from "react";

export default function HeaderWarning(props) {
  // This is the dummy data
  const dummy_message = JSON.parse(
    '["[Testing] The HDB Flat Portal will not be available from 6:00pm to 7:59pm on 28 March 2023, Tuesday, in preparation for the open booking of flats, which will start at 8:00pm.", "Testing Message 2", "Testing Message 3", "Testing Message 4", "Testing Message 5"]'
  );
  const msg = dummy_message;
  console.log(msg);

  const [currentmsg, setmessage] = useState(msg[0]);
  const [counter, setcounter] = useState(0);

  // Page number generator
  let total_page = msg.length;
  console.log(total_page);
  console.log(counter);

  const leftClick = () => {
    if (counter == 0) {
      setcounter(msg.length - 1);
      setmessage(msg[msg.length - 1]);
    } else {
      setcounter(counter - 1);
      setmessage(msg[counter - 1]);
    }
  };

  const rightClick = () => {
    if (counter == msg.length - 1) {
      setcounter(0);
      setmessage(msg[0]);
    } else {
      setcounter(counter + 1);
      setmessage(msg[counter + 1]);
    }
  };
  return (
    <div className="container position-absolute" style={{ zIndex: "10" }}>
      <div className="d-flex justify-content-end">
        <div className="bg-primary col col-lg-6 p-3 rounded">
          <div className="d-flex px-2">
            <div className="fs-4">
              <i
                className="bi bi-exclamation-triangle"
                style={{ color: "red" }}
              ></i>
            </div>
            <div className="fs-5 fw-bold text-white d-flex align-items-center px-2">
              Advisory
            </div>
            <div className="flex-grow-1 d-flex justify-content-end">
              <i
                className="bi bi-x-circle-fill d-flex align-items-center fs-5 text-white"
                onClick={props.toggle}
              ></i>
            </div>
          </div>
          <div className="px-2 text-white" style={{ minHeight: "175px" }}>
            {currentmsg}
          </div>
          <div className="d-flex align-items-center mx-2 my-2 gap-5">
            <div className="bg-white rounded-circle px-1" onClick={leftClick}>
              <i className="bi bi-chevron-left"></i>
            </div>
            <div className="bg-white rounded-circle px-1" onClick={rightClick}>
              <i className="bi bi-chevron-right"></i>
            </div>
            <div className="text-white">
              {counter + 1} of {total_page}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import data from '../../data.js';
const HooksTitle = () => {
  let y = data;
  const [titleData, setTitleData] = useState(data);
  return (
    <>
      <div>
        <hr></hr>
        {titleData.map((dataText) => {
          const { id, image, name, title, detail, component } = dataText;
          console.log(title);
          return (
            <>
              <h4 className="alert-heading">
                <i class="fa-solid fa-anchor"></i> {title}
              </h4>
              <hr className="mb-0"></hr>
              <div className="highlight mb-0">
                <p>{detail}</p>
                {/* <ul>
                <li>useCallback This can improve Performance.!</li>
              </ul> */}
              </div>
              <hr className="mt-0"></hr>
              <div className="mb-2">{component}</div>
            </>
          );
        })}

        <hr className="mb-0"></hr>
      </div>
    </>
  );
};
export default HooksTitle;

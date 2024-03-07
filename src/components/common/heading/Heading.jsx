import React from "react"

const Heading = ({ subtitle, title }) => {
//  we needed two props to use header components
    //  optional props we may use single or double props but make sure to write like these to avoid error {subtitle && <h3>{subtitle} </h3>}
  return (
    <>
      <div id='heading'>
        {subtitle && <h3>{subtitle} </h3>}
        <h1>{title} </h1>
      </div>
    </>
  )
}

export default Heading

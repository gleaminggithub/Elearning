import React from "react"
import { useLocation } from "react-router-dom"

const Back = ({ title }) => {
  const location = useLocation()
 console.log(location); // give current path or current standing point
  return (
    <>
      <section className='back'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        {/* split("/"): This method splits the pathname string into an array of substrings using the forward slash ("/") as the separator. For example, if location.pathname is "/home/about", split("/") would produce ["", "home", "about"].   */}
        {/* [1]: This accesses the second element of the array obtained after splitting the pathname. In JavaScript arrays are zero-indexed, so [1] accesses the element at index 1, which is the second element in the array. This corresponds to the segment of the URL path following the first forward slash. */}
        {/* attributes -- location, hash */}
        {/* For example, if the current location.pathname is "/home/about", {location.pathname.split("/")[1]} would evaluate to "home". Similarly, if the location.pathname is "/products/123", it would evaluate to "products". */}
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}
export default Back

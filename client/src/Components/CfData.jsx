import React, { useEffect, useState } from "react";
import axios from "axios";

function MyComponent() {
    const [cfData, setData] = useState([]);
    useEffect(() => {
      axios.get("/cfRatings")
        .then(res => {
          setData(res.data)
          console.log(res.data)
        })
        .catch(err => {
          console.log(err);
        })
    })
    return<a href = "https://codeforces.com/profile/Anurag-Singh-Rajput">
     Codeforces : {cfData.rating} | Max : {cfData.maxRating}
    </a>
  }

export default MyComponent;
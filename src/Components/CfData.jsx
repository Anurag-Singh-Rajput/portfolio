import axios from "axios";
import React, { useEffect, useState } from "react";

function MyComponent() {
    const [cfData, setData] = useState([]);
    useEffect(() => {
      axios.get("https://codeforces.com/api/user.info?handles=Anurag-Singh-Rajput#")
        .then(res => {
          console.log(res.data.result[0]);
          setData(res.data.result[0])
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
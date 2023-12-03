import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './content.css'


const Content = () => {
  const [result, setResult] = useState([]);
  console.log(result);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://dog.ceo/api/breed/hound/images"
      );
      setResult(response.data.message);
      console.log(response.data.message);
    }
    getData();
  }, []);

  return (
    <>
      <div className="all-contents">
        <div className="content-title">
          <h1>Are you also a <span> dog </span> lover?</h1>
          <h2>Check out these awesome breeds of dogs!</h2>
        </div>
        <div className="images">
          {
            result.map((element) => {
              return(
                <div className="dog-images" >
                  <img src= {element} />
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};
export default Content;

import axios from "axios";
import { useState } from "react";

function useNetwork() {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");


  function get(url) {
    setIsLoading(true);
    setError("");
    axios.get('dummy-data/product-list.json')
      .then((res) => {
        const data = {"data": [{
            "id": 1,
            "tsitle": "iPhone 15",
            "amount": "Bahut jyada"
        }]}
       setData(data.data);
      }).catch(e => {
        console.log(e);
        setError("Error Occured");
      }).finally(()=> {
        setIsLoading(false);
      }) 
  }

  return { get, data,isLoading,error };
}

export default useNetwork;

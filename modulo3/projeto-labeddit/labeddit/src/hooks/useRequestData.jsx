import axios from "axios";
import { useState, useEffect } from "react";

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const getData = () => {
    setIsLoading(true);
    axios
      .get(url, {
        headers: {
          "Content-type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI2OWJkNzYzLTQ2ZDAtNDBkYi04OTU4LTVjYmQwOTZlOGM0OSIsInJvbGUiOiJHVUVTVCIsImlhdCI6MTY1OTI5NjkxMywiZXhwIjoxNjU5MzQwMTEzfQ.rDJ4bjGZWBXQBMtfbPMiCHlHnn5eO9vfPcxGPJaukmM"
        }
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return [data, isLoading];
};
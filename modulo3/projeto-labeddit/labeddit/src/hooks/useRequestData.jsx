import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from '../constants/urls';

export const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem('token');

  const getData = () => {
    setIsLoading(true);
    axios
      .get(`${BASE_URL}${url}`, {
        headers: {
          "Content-type": "application/json",
          Authorization: token
        }
      })
      .then((response) => {
        setData(response.data);
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
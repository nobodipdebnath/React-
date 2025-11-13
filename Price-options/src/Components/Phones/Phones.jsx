import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";
import { Audio } from "react-loader-spinner";

export const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res => res.json())
    // .then(data => setPhones(data.data));
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phonesWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(phonesWithFakeData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      { loading && <Audio
        height={80}
        width={80}
        radius={9}
        color="green"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />}
      <h2 className="text-4xl"> phones :{phones.length}</h2>
      <BarChart width={1200} height={400} data={phones}>
        <Bar dataKey="price" fill="red"></Bar>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

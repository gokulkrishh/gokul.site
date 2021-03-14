import React, { useEffect, useState } from "react";

import LinkImg from "components/LinkImg";

const lists = [
  {
    title: "Youtube Subscribers",
    link: "https://youtube.com/gokulkalaikoven",
    count: 0,
  },
  {
    title: "Youtube Views",
    link: "https://youtube.com/gokulkalaikoven",
    count: 0,
  },
];

const Youtube = () => {
  const [data, setData] = useState(lists);

  useEffect(() => {
    fetch(
      "https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCQuGo1upeBPLH8RNVidUCVg",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "SD0NGwm4vZmshHugxpY7Uggm6PUDp1IP6DujsnXfOOx5cG4QhA",
          "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        const { items = [] } = response;
        const [item = {}] = items;
        const { statistics } = item;
        const { subscriberCount = 0, viewCount = 0 } = statistics;
        const updatedData = data.map((datum, index) => {
          if (index === 0) {
            return {
              ...datum,
              count: subscriberCount,
            };
          }
          return {
            ...datum,
            count: viewCount,
          };
        });
        setData(updatedData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {data.map((datum) => {
        return (
          <a
            href={datum.link}
            className="link"
            target="_blank"
            rel="noreferrer"
            key={datum.title}
          >
            <div className="card">
              <LinkImg />
              <h3>{datum.title}</h3>
              <h4>{datum.count}</h4>
            </div>
          </a>
        );
      })}
    </>
  );
};

export default Youtube;

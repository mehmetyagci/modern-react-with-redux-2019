import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState ([]);
  useEffect (
    () => {
      (async resource => {
        const response = await axios.get (
          `https://jsonplaceholder.typicode.com/${resource}`
        );

        setResources (response.data);
      }) (resource);
    },
    [resource]
  );

  return resources;

  //   const fetchResource = async resource => {
  //     const response = await axios.get (
  //       `https://jsonplaceholder.typicode.com/${resource}`
  //     );
  //     setResources (response.data);
  //   };

  //   useEffect (
  //     () => {
  //       fetchResource (resource);
  //     },
  //     [resource]
  //   );
};

export default useResources;

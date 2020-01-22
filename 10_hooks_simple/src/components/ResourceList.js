import React, {useState, useEffect} from 'react';
import axios from 'axios';

const ResourceList = ({resource}) => {
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

  return (
    <div>
      <div>
        <h1>ResourceList</h1>
      </div>
      <div />
      <div>
        <h3>{resources.length}</h3>
      </div>
    </div>
  );
};

export default ResourceList;

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

const ResourceList = ({resource}) => {
  const resources = useResources (resource);
  
  return (
    <div>
      <div>
        <h1>ResourceList</h1>
      </div>
      <div>
        <ul>
          {resources.map (record => <li key={record.id}>{record.title}</li>)}
        </ul>
      </div>
      <div>
        <h3>{resources.length}</h3>
      </div>
    </div>
  );
};

export default ResourceList;

import React from 'react';
import useResources from './useResources';

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

import React from 'react';
import {useEffect, useState} from 'react';

function Table() {

  const [data, setData] = useState([
    { id: 1, studentId: 100032202, name: 'Owen', status: 'CLAIMED'}
  ])

  useEffect(() => {
    fetch('http://localhost:8080/api/students')
      .then(res => res.json())
      .then(d => setData(prev => [...prev, ...d]))
  }, [])


  const elements = data.map(row => (
    <tr key={row.id}>
      <td>{row.studentId}</td>
      <td>{row.status}</td>
      <td>{row.name}</td>
    </tr>
  ))

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="head-row">ID</th>
            <th className="head-row">Status</th>
            <th className="head-row">Name</th>
          </tr>
        </thead>
        {elements}
      </table>
    </div>
  );
}

export default Table;

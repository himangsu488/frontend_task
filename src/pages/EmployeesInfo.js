import React from 'react';

const EmployeeTable = () => {

  const fakeData = [
    {
      name: 'James Smith',
      joiningDate: '2022-01-01',
      phoneNumber: '9874563210',
      emailAddress: 'james@gmail.com',
      address: 'Delhi, India',
    },
    {
        name: 'Samir Smith',
        joiningDate: '2020-02-15',
        phoneNumber: '9876543210',
        emailAddress: 'samir@gmail.com',
        address: 'Guwahati, Assam, India',
      },
      {
        name: 'Mike Singh',
        joiningDate: '2019-03-20',
        phoneNumber: '9531287450',
        emailAddress: 'mike@gmail.com',
        address: 'Jorhat, Assam, India',
      },
      {
        name: 'Abhi Das',
        joiningDate: '2022-02-28',
        phoneNumber: '9876257863',
        emailAddress: 'abhi@gmail.com',
        address: 'Goa, India',
      },
      {
        name: 'Deepak Sharma',
        joiningDate: '2021-11-20',
        phoneNumber: '7845129877',
        emailAddress: 'deepak@gmail.com',
        address: 'Mumbai, Maharastra, India',
      },
      {
        name: 'James Smith',
        joiningDate: '2022-01-01',
        phoneNumber: '9874563210',
        emailAddress: 'james@gmail.com',
        address: 'Delhi, India',
      },
      {
          name: 'Samir Smith',
          joiningDate: '2020-02-15',
          phoneNumber: '9876543210',
          emailAddress: 'samir@gmail.com',
          address: 'Guwahati, Assam, India',
        },
        {
          name: 'Mike Singh',
          joiningDate: '2019-03-20',
          phoneNumber: '9531287450',
          emailAddress: 'mike@gmail.com',
          address: 'Jorhat, Assam, India',
        },
        {
          name: 'Abhi Das',
          joiningDate: '2022-02-28',
          phoneNumber: '9876257863',
          emailAddress: 'abhi@gmail.com',
          address: 'Goa, India',
        },
        {
          name: 'Deepak Sharma',
          joiningDate: '2021-11-20',
          phoneNumber: '7845129877',
          emailAddress: 'deepak@gmail.com',
          address: 'Mumbai, Maharastra, India',
        },

  ];

  const tableHeader = (
    <thead>
      <tr>
        <th>Name</th>
        <th>Joining Date</th>
        <th>Phone Number</th>
        <th>Email Address</th>
        <th>Address</th>
      </tr>
    </thead>
  );

  const tableBody = (
    <tbody>
      {fakeData.map((employee, index) => (
        <tr key={index}>
          <td>{employee.name}</td>
          <td>{employee.joiningDate}</td>
          <td>{employee.phoneNumber}</td>
          <td>{employee.emailAddress}</td>
          <td>{employee.address}</td>
        </tr>
      ))}
    </tbody>
  );

  return (
    <div>
    <h1 className='employees-title'>Employees Details</h1>
        <div className='employee-info'>
        
            <table className='employee-table'>
            {tableHeader}
            {tableBody}
            </table>
        </div>
    </div>
  );
};

export default EmployeeTable;

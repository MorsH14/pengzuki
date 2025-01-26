import React, { useEffect, useState } from 'react';
import { onValue, ref } from 'firebase/database';
import { database } from './firebase';
const AddressList = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const addressRef = ref(database, 'solanaAddresses');

    // Listen for real-time updates
    onValue(addressRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.values(data);
        setAddresses(formattedData);
      } else {
        setAddresses([]);
      }
    });
  }, []);

  return (
    <div>
      <h1>Saved Solana Addresses</h1>
      <ul>
        {addresses.map((item, index) => (
          <li key={index}>{item.address}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddressList;

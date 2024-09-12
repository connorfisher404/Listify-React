import React, { useState } from 'react';

export default function Items({ items, deleteItem }) {
  const [fadeItems, setFadeItems] = useState([]); 
  const [checkedItems, setCheckedItems] = useState({}); 

  function handleCheck(index) {

    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [index]: !prevCheckedItems[index]
    }));


    setFadeItems([...fadeItems, index]);


    setTimeout(() => {
      deleteItem(index); 
      setCheckedItems((prevCheckedItems) => ({
        ...prevCheckedItems,
        [index]: false 
      }));
      setFadeItems((prevFadeItems) => prevFadeItems.filter(i => i !== index)); 
    }, 500); 
  }

  return (
    <div className='m-auto max-w-[300px] sm:max-w-[400px] sm:w-[70%] md:max-w-[600px] lg:max-w-[700px]'>
      <div className='flex-1'>
        <ul className='flex flex-col gap-3'>
          {items.map((item, index) => (
            <li
              key={index}
              className={`listItem flex p-2 rounded-md text-lg text-indigo-400 justify-between items-center ${fadeItems.includes(index) ? 'fade-out' : 'fade-in'}`}
            >
              <div><i className="fa-solid fa-circle text-xs"></i> &nbsp; &nbsp;{item} </div>
              <input
                type="checkbox"
                className='item-checkbox'
                checked={checkedItems[index] || false} 
                onChange={() => handleCheck(index)} 
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

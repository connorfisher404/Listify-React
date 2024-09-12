import React, { useEffect, useState } from 'react';
import Items from './Items';

export default function Input() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('list'));
    if (items) {
      setList(items);
    }
  }, []);

  function addList() {
    const newList = [...list, inputValue];
    setList(newList);
    setInputValue('');
    localStorage.setItem('list', JSON.stringify(newList));
  }



  function deleteItem(indexToDelete) {
    const updatedList = list.filter((_, index) => index !== indexToDelete);
    setList(updatedList);
    localStorage.setItem('list', JSON.stringify(updatedList));
  }

  return (
    <div>
       <div className='m-auto max-w-[300px] sm:max-w-[400px] sm:w-[70%] md:max-w-[600px] lg:max-w-[700px]'>
          <div className='relative flex items-center mt-10 mb-10'>
            <input
              onKeyDown={(e)=>{
                if(e.key === "Enter"){
                  console.log('entered')
                  addList()
                }
              }}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              className='bg-black placeholder-indigo-400 flex-1 rounded-md p-3 text-2xl border-none border-transparent'
              placeholder='Add to list'
              value={inputValue}
            />
            <button onClick={addList}>
              <i className="fa-solid fa-circle-plus  text-4xl text-indigo-400 absolute right-3 -translate-y-1/2 hover:text-indigo-500"></i>
            </button>
          </div>

          
          
        </div>
        <Items items={list} deleteItem={deleteItem} />
    </div>
   

  );
}

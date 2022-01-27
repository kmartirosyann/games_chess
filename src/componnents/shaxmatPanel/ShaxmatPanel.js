import React from 'react';
import BoxPanel from './BoxPanel';
import LeterPanel from './LeterPanel';
import NumberPanel from './NumberPanel';

export default function ShaxmatPanel() {
  return (
   <div className='container'>
      <LeterPanel/>
      <div className='numberPanel'>
        <NumberPanel/>
          <div>
            <BoxPanel/>
          </div>
          <NumberPanel/>
      </div>
        
      <LeterPanel/>
  </div>
  );
}

import React from 'react';
import BoxPanel from './BoxPanel';
import LettersPanel from './LettersPanel';
import NumberPanel from './NumberPanel';

export default function ChessPanel() {
  return (
   <div className='container'>
      <LettersPanel/>
      <div className='numberPanel'>
        <NumberPanel/>
          <div>
            <BoxPanel/>
          </div>
          <NumberPanel/>
      </div>
      <LettersPanel/>
  </div>
  );
}

import React, { useEffect } from 'react';
import { ConditionallyRender } from 'react-util-kit';
 
export default function SatartBtn(props) {
  
    const initialAction = () => {
      props.actions.initialAction();
    }

 
  return (
    <div>
      {/* <button className='start-btn' onClick={() => initialAction()} >Let ' s do started</button> */}
    </div>
  );
}

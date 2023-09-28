import React from 'react';
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

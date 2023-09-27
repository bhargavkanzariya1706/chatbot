import React from 'react';
import Link from './Link';

function VisiteLink() {

    const getUrl = () =>{
        return `https://tridevinfoways.com/`;
    }
  return (
    <div>
      <Link url={getUrl()} title={"Visite web-site"} />
    </div>
  );
}

export default VisiteLink;

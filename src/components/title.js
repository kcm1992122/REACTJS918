import React from 'react';
function Title({ appName, ver, fullName, className,children})
{
return(
    <div className={className}>

      <h2>{appName} version.{ver}</h2>
      {children}
     <p>created by {fullName()}</p>   

    </div>
);
}

export default Title;
import React from 'react'

export default function Map() {
  return (
    <div>
   <div className="w-full mt-[50px]">
   <iframe 
  className="w-full h-96" 
  frameBorder={0} 
  scrolling="no" 
  marginHeight={0} 
  marginWidth={0}
  src="https://maps.google.com/maps?width=100%25&amp;height=800&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
>
</iframe>
</div>

    </div>
  )
}

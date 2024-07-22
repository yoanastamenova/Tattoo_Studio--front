import React from "react"

export const Body = () => {
    return (
      <>
         <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound />} />
          <Route path='/register' element={<Register />}/>
          <Route path='/services' element={<Service />}/>
         </Routes>
      </>
    )
  }

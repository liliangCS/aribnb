import React, { memo, useEffect } from 'react'
import httpRequest from '@/service'


const Home = memo(() => {
  useEffect(() => {
    httpRequest.get({ url: "/home/highscore" }).then(res => {
      console.log(res)
    })
  }, [])

  return (
    <div>Home</div>
  )
})

export default Home
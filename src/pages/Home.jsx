import React from 'react'
import Header from '../components/Header'
import PostData from '../components/PostData'
import Pagination from '../components/Pagination'

export default function Home() {
  return (
    <div>
<Header/>
<div>
    <PostData/>
    <Pagination/>
</div>
    </div>
  )
}

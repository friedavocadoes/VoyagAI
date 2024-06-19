import React from 'react'

export default function Card({item}) {
  return (
    <>
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      Monument 
      <div className="badge badge-secondary">visit</div>
    </h2>
    <p>Plan. Explore. Experience</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">explore </div> 
      <div className="badge badge-outline">Add to bucket list</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

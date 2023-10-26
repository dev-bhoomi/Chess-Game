import React from 'react'

const Ranks = ({ranks}) => {
  // console.log(ranks)
  return (
    <>
    <div className="ranks">
        {ranks.map(rank => <span key={rank}>{rank}</span>)}
    </div>
    </>
  )
}

export default Ranks

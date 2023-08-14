import React from 'react'

const Blog = () => {
  return (
    <div className='main'>
        <ul>
            <li key="angular" className='jj'>Angular</li>
            <li key="node" className='jj'>Node</li>
            <li key="react" className='jj'>React</li>
        </ul>
        <div className='numbers'>
            <span>one</span>
            <span>two</span>
        </div>
        <div>
            <button className='my-button disabled btn-primary'>Submit</button>
        </div>
        <div className='some-class'/>
    </div>
  )
}

export default Blog
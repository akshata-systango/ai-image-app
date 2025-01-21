
import React from 'react'

const Form = ({setShowProducts, isSearched, isLoading, error, product, url, trackedProducts, handleInputChange, handleTrack}) => {
  return (
    <div className='z-10 relative grid grid-cols-1'>
      <div className='w-full'>
      <div className="row flex rounded justify-center items-center w-full h-full" style={{flexWrap: 'wrap', padding: '10%'}}>
      <h2 className='text-center items-center w-screen text-2xl font-bold my-5 uppercase'>Track a Product</h2>
      <div className='flex' style={{width: '60%'}}>
      <input
        className='rounded p-2 text-gray-500'
        style={{width:'80%'}}
        type="text"
        value={url}
        onChange={handleInputChange}
        placeholder="Paste product link here"
      />
      <button 
      style={
        {width: '20%'}
      }
      onClick={handleTrack} className='rounded w-full bg-indigo-500 p-2 mx-2 text-lg font-bold'>Track</button>
      </div>
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {product && url && !isLoading && isSearched ? (
        <div>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} width="100" />
          <p>Current Price: {product.price}</p>
        </div>
      ) : (
        url && !isLoading && isSearched && <span>No Product Found... Please Check Your URL</span>
      )}
      </div>
    </div>
  )
}

export default Form
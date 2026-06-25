
import React, { useState } from 'react'

const CharacterCounter = () => {
    const [sentence,Setsentence] = useState('')
    
    const lengthofSent= sentence.length
    const wordCount = sentence.trim() === ""
  ? 0
  : sentence.trim().split(/\s+/).length;
  return (

    <>
    <h2 className='text-center'>Live Character Counter</h2>
    <div className='container'>
    <input type="text"  placeholder='Enter a sentence' 
    onChange={(e)=>Setsentence(e.target.value)}/>
    
    <br />
    <p>Text: {sentence} </p>
    <p>Characters: {lengthofSent} </p>
    <p>Words:{wordCount}</p>

    </div>
    </>
  )
}

export default CharacterCounter
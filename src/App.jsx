import React from 'react'

const App = () => {
  return (
    <div>
      <form action="">
        <h2>How satisfied are you with our products?</h2>
        <div className="rating">
          <input type="radio" id="1" name="rating" value="1" />
          <label>1</label>
          <input type="radio" id="2" name="rating" value="2" />
          <label>2</label>
          <input type="radio" id="3" name="rating" value="3" />
          <label>3</label>
          <input type="radio" id="4" name="rating" value="4" />
          <label>4</label>
          <input type="radio" id="5" name="rating" value="5" />
          <label>5</label>
        </div>
      </form>
    </div>
  )
}

export default App
'use strict';

function Homepage() {
  return ( 
  <div>
    <p>This is our homepage</p>
    <a href="/cards">Click here to view cards</a>
    <img src="/static/img/balloonicorn.jpg" alt="" />
  </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));

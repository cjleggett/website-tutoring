'use strict';

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div>
        <h1>Counter</h1>
        <p>We clicked the button 0 times</p>
        <button>Click Me!</button>
    </div>
    );
  }
}


window.addEventListener('DOMContentLoaded', () => {
    let container = document.getElementById("app-container");
    ReactDOM.render(e(App), container);
});


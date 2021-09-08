import React from 'react';
import MenuBar from './components/MenuBar.jsx';
import Cover from './components/Cover.jsx';
import Body from './components/Body.jsx';
import Footer from './components/Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <MenuBar />
        <Cover />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;
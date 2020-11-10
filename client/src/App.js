import React, {Component} from 'react'
import './css/App.css';
import logo from './logo.svg'
import Uploader from './components/Uploader'
import Images from './components/Images'
import {__LoadImages, __DeleteAll} from './utils/CloudService'

class App extends Component {
  constructor() {
    super()
    this.state = {
      imgUrls: []
    }
  }

  componentDidMount() {
    this.setImages()
  }

  setImages = async () => {
    try {
        const images = await __LoadImages()
        this.setState({imgUrls: images})
    } 
    catch(err) { throw err }
  }

  delete = async () => {
    try {
      await __DeleteAll()
      await this.setImages()
    }
    catch(err) { throw err }
  }


  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <div className="title">
            <img src={logo} alt="logo" />
            <h2>Cloudinary</h2>
          </div>
          <div className="pic-buttons">
            <Uploader setImages={this.setImages} />
            <button className="btn  teal darken-4" onClick={() => this.delete()}>
              <i className="material-icons left">delete_sweep</i>Delete All
            </button>
          </div>
        </header>
        <main>
          <Images imgUrls={this.state.imgUrls} />
        </main>
      </div>
    );
  }
}

export default App;

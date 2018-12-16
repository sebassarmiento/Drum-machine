import React, { Component } from 'react';
import './App.css';

const bankOne = [{
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
}, {
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
}, {
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
}, {
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
}, {
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
}, {
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
}, {
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
}, {
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
}, {
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
},
];

const bankTwo = [{
  keyTrigger: 'Q',
  id: 'Chord-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
}, {
  keyTrigger: 'W',
  id: 'Chord-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
}, {
  keyTrigger: 'E',
  id: 'Chord-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
}, {
  keyTrigger: 'A',
  id: 'Shaker',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
}, {
  keyTrigger: 'S',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
}, {
  keyTrigger: 'D',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
}, {
  keyTrigger: 'Z',
  id: 'Punchy-Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
}, {
  keyTrigger: 'X',
  id: 'Side-Stick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
}, {
  keyTrigger: 'C',
  id: 'Snare',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
}];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switch: true,
      soundName: 'Drum machine',
      bank: true,
      rangeValue: 0.5
    }
  }

  componentDidMount() {
    document.body.onkeypress = this.handleKey.bind(this)
  }

  handleKey(e) {
    if(this.state.switch){

      let btns = [...document.getElementsByTagName('span')]
      let btnPressed = btns.find(b => b.innerHTML === e.key.toUpperCase())

      if (this.state.bank) {
        for (let i = 0; i < bankOne.length; i++) {
          if (e.key.toUpperCase() === bankOne[i].keyTrigger) {
            let audio = new Audio(bankOne[i].url)
            audio.volume = this.state.rangeValue
            audio.play()
            this.setState({ soundName: bankOne[i].id })
            let btnPressedParent = btnPressed.parentElement
            btnPressedParent.className = "selected"
            setTimeout(() => btnPressedParent.removeAttribute('class'), 100)
          }
        }
      } else {
        for (let i = 0; i < bankTwo.length; i++) {
          if (e.key.toUpperCase() === bankTwo[i].keyTrigger) {
            let audio = new Audio(bankTwo[i].url)
            audio.volume = this.state.rangeValue
            audio.play()
            this.setState({ soundName: bankTwo[i].id })
            let btnPressedParent = btnPressed.parentElement
            btnPressedParent.className = "selected"
            setTimeout(() => btnPressedParent.removeAttribute('class'), 100)
          }
        }
      }
    }
  }

  handleClick(e) {
    console.log(e.target.className)
    if (this.state.switch) {
      if (this.state.bank) {
        for (let i = 0; i < bankOne.length; i++) {
          if (e.target.innerHTML === bankOne[i].keyTrigger || e.target.innerHTML === `<span>${bankOne[i].keyTrigger}</span>`) {
            let audio = new Audio(bankOne[i].url)
            audio.volume = this.state.rangeValue
            audio.play()
            this.setState({ soundName: bankOne[i].id })
            e.target.className = "selected"
            let event = e.target
            setTimeout(() => event.removeAttribute('class'), 100)
          }
        }
      } else {
        for (let i = 0; i < bankTwo.length; i++) {
          if (e.target.innerHTML === bankTwo[i].keyTrigger || e.target.innerHTML === `<span>${bankTwo[i].keyTrigger}</span>`) {
            let audio = new Audio(bankTwo[i].url)
            audio.volume = this.state.rangeValue
            audio.play()
            this.setState({ soundName: bankTwo[i].id })
            e.target.className = "selected"
            let event = e.target
            setTimeout(() => event.removeAttribute('class'), 100)
          }
        }
      }
    }
  }

  changeVolume(e){
    this.setState({
      rangeValue: e.target.value,
      soundName: "Volume: " + Math.round(e.target.value * 100)
    })
  }

  render() {
    return (
      <div className="main-container">
        <div className={this.state.bank ? "keyboard-1" : "keyboard-2"} >
          <div onClick={(e) => this.handleClick(e)} ><span>Q</span></div>
          <div onClick={(e) => this.handleClick(e)} ><span>W</span></div>
          <div onClick={(e) => this.handleClick(e)} ><span>E</span></div>
          <div onClick={(e) => this.handleClick(e)} ><span>A</span></div>
          <div onClick={(e) => this.handleClick(e)} ><span>S</span></div>
          <div onClick={(e) => this.handleClick(e)} ><span>D</span></div>
          <div onClick={(e) => this.handleClick(e)} ><span>Z</span></div>
          <div onClick={(e) => this.handleClick(e)} ><span>X</span></div>
          <div onClick={(e) => this.handleClick(e)} ><span>C</span></div>
        </div>
        <div className="panel" >
          <div className="panel-inside" >
            <div className="switch" >
              <h3>{this.state.switch ? "On" : "Off"}</h3>
              <div onClick={() => this.setState({ switch: !this.state.switch })} className={this.state.switch ? "switcher-on" : "switcher-off"} ></div>
            </div>
            <div className="screen" >
              {this.state.soundName}
            </div>
            <div className="volume" >
              <input onChange={(e) => this.changeVolume(e)} value={this.state.rangeValue} min="0" max="1" step="0.01" type="range" />
            </div>
            <div className="switch" >
              <h3>Bank</h3>
              <div onClick={() => this.setState({ bank: !this.state.bank })} className={this.state.bank ? "bank-on" : "bank-off"} ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

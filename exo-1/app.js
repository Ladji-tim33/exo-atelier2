

class Welcome extends React.Component {
    render(){
        
        return <div><h1>Bonjour {this.props.name} 
        </h1>
        <p>{this.props.children}</p>
        </div>
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount () {
        this.timer = window.setInterval(this.tick.bind(this), 1000)
    }

    componentwilUnmount (){
        window.clearInterval(this.timer)
    }

    tick (){
        this.setState({date: new Date()})
    }
   render () {
   
    return <div>
        <p>Il est {this.state.date.toLocaleDateString()} {this.state.date.toLocaleTimeString()}</p>
    </div>
   }
}

class Incremmente extends React.Component {
    constructor(props) {
        super(props)
        this.state = {n: props.start}
    }

    componentDidMount () {
        this.timer = window.setInterval(this.incremmente.bind(this), 1000)
    }

    componentwilUnmount (){
        window.clearInterval(this.timer)
    }

    incremmente (){
        this.setState(function (state, props) {
            return {n: this.state.n + props.step}
        })
    }
   render () {
   
    return <div>
        Valeur : {this.state.n}
    </div>
   }
}

Incremmente.defaultProps = {
    start: 0,
    step: 1
}

function Home () {
    return <div>
        <Welcome name="Ladji" />
        <Welcome name="Santos" />
        <Clock/>
        <Incremmente start={0}/>

        <Incremmente start={20} step={10}/>
    </div>

}


ReactDOM.render(<Welcome name="Mbeye" />, document.querySelector('#root'))
ReactDOM.render(<Home />, document.querySelector('#roote'))

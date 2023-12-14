function Field({ name, value, onChange, children }) {
    return <div className="form-group">
        <labe htmlFor={name}>{children}</labe>
        <input type="text" value={value} onChange={onChange} id={name} name={name} className="form-control" />
    </div>
}

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nom: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        const name = e.target.name
        this.setState({
            [name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({
            nom: '',

        })
    }
    render() {
        return <div>
            <nav class=" bg-light p-3">
                <div class="text-center">
                    <div  className="ms-5 "><h5>Bonjour, Vous êtes : {this.state.nom} </h5></div>
                </div>
               
            </nav>
            <form className="container w-50">
                <Field name="nom" value={this.state.nom} onChange={this.handleChange}>Nom</Field>

            </form>
        </div>

    }
}

ReactDOM.render(<Home />, document.querySelector('#app'))

class Jeemacoder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialise la propriété 'nom' à une chaîne vide
            prenom: '',
            nom: '',
            email: '',
            number: '',

            // Initialise la propriété 'utilisateurs' à un tableau vide  
            utilisateurs: [],
            modifUtilisateurs: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdite = this.handleEdite.bind(this);
    }

    //  fonction  appelée lorsqu'il y a un changement dans le champ 
    handleChange(e) {
        const name = e.target.name
        // const type = e.target.type

        this.setState({ //mettra à jour l'état du state

            [name]: e.target.value// recuperer la valeur sesie
        })
    }

    // fonction  appelée lors de la soumission du formulaire. 
    handleClick(e) {
        e.preventDefault();
        if (this.state.modifUtilisateurs !== false) {
            const utilisateurModifier = this.state.utilisateurs.map((utilisateur) =>
                utilisateur.id === this.state.modifUtilisateurs
                    ? {
                        id: utilisateur.id,
                        nom: this.state.nom,
                        prenom: this.state.prenom,
                        email: this.state.email,
                        number: this.state.number,
                    }
                    : utilisateur
            );
            this.setState({
                utilisateurs: utilisateurModifier,
                modifUtilisateurs: false,
                nom: "",
                prenom: "",
                email: "",
                number: "",
            })
        } else {
            const newTodo = {

                // Specifier l'id des taches
                id: Math.floor(Math.random() * 10000),
                prenom: this.state.prenom,
                nom: this.state.nom,
                email: this.state.email,
                number: this.state.number,
                // modifUtilisateurs: this.state.modifUtilisateurs
            };
            console.log(this.handleClick)

            this.setState(prevState => ({ //mettra à jour l'état du composant
                prenom: '',
                nom: '',
                email: '',
                number: '',
                utilisateurs: [...prevState.utilisateurs, newTodo]
            }));
        }

    }

    //  fonction  appelée lorsqu'il y a un click sur button supprimer dans le champ 
    handleDelete(id) {
        this.setState(prevState => ({
            utilisateurs: prevState.utilisateurs.filter(taches => taches.id !== id)
        }));
    }

    handleEdite(id) {
        const modifiaction = this.state.utilisateurs.find(
            (utilisateur) => utilisateur.id === id);
        console.log(this.state.utilisateurs);
        this.setState({
            modifUtilisateurs: id,
            nom: modifiaction.nom,
            prenom: modifiaction.prenom,
            email: modifiaction.email,
            number: modifiaction.number,
        });

        // console.log(utilisateurModifier);
    }

    render() {
        console.log(this.state.utilisateurs);
        return (
            <div>
                <form className="container w-50 mt-5"  >
                    <h4 className="text-center mb-5 text-dark">Jeemacoder gestion utilisateur</h4>
                    <div className="row bg-white shadow-lg p-3 mb-5 bg-body rounded p-4 input-group">
                        <div className="col-md-6">
                            <Myform type="text" name="prenom" value={this.state.prenom} onChange={this.handleChange} required>
                                Prenom
                            </Myform>
                        </div>
                        <div className="col-md-6">
                            <Myform type="text" name="nom" value={this.state.nom} onChange={this.handleChange}>
                                Nom
                            </Myform>
                        </div>

                        <div className="col-md-6 mt-4">
                            <Myform type="email" name="email" value={this.state.email} onChange={this.handleChange}>
                                Email
                            </Myform>
                        </div>
                        <div className="col-md-6 mt-4">
                            <Myform type="number" name="number" value={this.state.number} onChange={this.handleChange}>
                                Téléphone
                            </Myform>
                        </div>
                        <div  >
                            <Buttonajouter
                                
                                children={
                                    this.state.modifUtilisateurs === false ? "Ajouter" : "Modifier"
                                }
                                className={
                                    this.state.modifUtilisateurs === false
                                        ? "btn btn-success w-100"
                                        : "btn btn-warning fs-5 w-100"
                                }
                                onClick={this.handleClick}
                            ></Buttonajouter>
                        </div>

                    </div>
                    
                </form>
                <Mytable utilisateurs={this.state.utilisateurs} handleDelete={this.handleDelete} handleEdite={this.handleEdite} />
            </div>

        );
    }
}

// cree une class pour formulaire
class Myform extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name} className="text-dark pb-3">{this.props.children}</label>
                <input
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.props.onChange}
                    id={this.props.name}
                    name={this.props.name}
                    className="form-control "
                />
            </div>
        );
    }
}

// cree une class pour Button Ajouter
class Buttonajouter extends React.Component {
    render() {
        return (
            <div className="mt-4 "> <button  className={this.props.className} onClick={this.props.onClick}>{this.props.children}</button></div>

        )
    }
}

// cree une class pour le tablau
class Mytable extends React.Component {
    render() {
        return (
            <div className="mt-4">
                <hr />
                <h2 className="text-center mb-4">Utilisateur</h2>
                <table className="table text-center">
                    <thead>
                        <tr>
                            <th>Prenom</th>
                            <th>Nom</th>
                            <th>Email</th>
                            <th>Téléphone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <Myresult utilisateurs={this.props.utilisateurs} handleDelete={this.props.handleDelete} handleEdite={this.props.handleEdite} />
                </table>
            </div>

        )
    }
}

// cree une class pour le tablau
class Myresult extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <tbody>

                {this.props.utilisateurs.map((tabmap) => (
                    <tr key={tabmap.id}>
                        <td >
                            {tabmap.prenom}
                        </td>
                        <td>
                            {tabmap.nom}
                        </td>
                        <td>
                            {tabmap.email}
                        </td>
                        <td>
                            {tabmap.number}
                        </td>
                        <td>
                            <button
                                className="btn btn-sm btn-danger "
                                onClick={() => this.props.handleDelete(tabmap.id)}>Supprimer
                            </button>
                            <button
                                className="btn btn-sm btn-warning ms-2"
                                onClick={() => this.props.handleEdite(tabmap.id)}>Modifier
                            </button>
                        </td>
                    </tr>

                ))}

            </tbody>

        )
    }
}

ReactDOM.render(<Jeemacoder />, document.querySelector('#app'));

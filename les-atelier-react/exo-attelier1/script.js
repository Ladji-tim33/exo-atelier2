class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialise la propriété 'nom' à une chaîne vide
            list: '',
            // Initialise la propriété 'todoList' à un tableau vide  
            todoList: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    //  fonction  appelée lorsqu'il y a un changement dans le champ 
    handleChange(e) {
        this.setState({ //mettra à jour l'état du state
            list: e.target.value // recuperer la valeur sesie
        })
    }

    // fonction  appelée lors de la soumission du formulaire. 
    handleClick(e) {
        e.preventDefault();
        const newTodo = {
            // Secifier l'id de les taches
            id: Math.floor(Math.random() * 10000),
            tache: this.state.list

        };
        console.log({ tache: this.state.list })

        this.setState(prevState => ({ //mettra à jour l'état du composant
            list: '',
            todoList: [...prevState.todoList, newTodo]
        }));

    }

    //  fonction  appelée lorsqu'il y a un click sur button supprimer dans le champ 
    handleDelete(id) {
        this.setState(prevState => ({
            todoList: prevState.todoList.filter(taches => taches.id !== id)
        }));
    }

    render() {
        return (
            <form className="container mt-5" >
                <h1 className="text-center mb-5 text-light">Todo List</h1>
                <div className="row input-group">
                    <div className="col-11">
                        <Globform name="list" value={this.state.list} onChange={this.handleChange}>
                            Entrez une tache
                        </Globform>
                    </div>
                    <div className="col-1">
                        <Buttonajouter onClick={this.handleClick}>+</Buttonajouter>
                    </div>
                </div>

                {this.state.todoList.map(tache => (
                    <Mylist
                        key={tache.id}
                        task={tache.tache}
                        onDelete={() => this.handleDelete(tache.id)}
                    // onEdit={() => this.handleEdit(task.id)}
                    />
                ))}
            </form>

        );
    }
}
// cree une class pour formulaire
class Globform extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.name} className="text-light">{this.props.children}</label>
                <input
                    type="text"
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
            <div className="mt-4 "> <button className="btn btn-primary fs-4" onClick={this.props.onClick}>{this.props.children}</button></div>

        )
    }
}

// cree une class pour les taches
class Mylist extends React.Component {
    render() {
        // const { task, onDelete } = this.props;
        return (
            <div className="d-flex justify-content-between bg-primary mt-3 pt-3 ps-2 pe-2">
                <div >
                    <p >
                        {this.props.task}
                    </p>
                </div>

                <div>
                    <button
                        className="btn btn-sm btn-danger mb-3 text-end"
                        onClick={this.props.onDelete}>Supprimer
                    </button>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.querySelector('#app'));



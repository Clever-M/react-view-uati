
    import React, {Component} from 'react'
    import {withRouter} from 'react-router'
    import PropTypes from 'prop-types'
    import users from './users-data'
    

    class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {listUsers: []};
    }

    async componentDidMount() {
        this.setState({
            listUsers: users,
        });
    }

    btnNewClick(event) {
        this.props.history.push('/user/');
    }

    btnEditClick(event, item) {
        this.props.history.push('/user/' + item.id);
    }

    /*async btnDeleteClick(event, item) {
        await usersService.deleteUser(item.id);
        const retorno = await usersService.getUsers();
        this.setState({
        listUsers: retorno,
        });
        //alert('excluindo' + JSON.stringify(item));
    }*/

    render = () => (
        <React.Fragment>
        <div className="container">
            <div className="row">
            <button
                onClick={e => {
                this.btnNewClick(e);
                }}
                type="button"
                className="btn btn-primary"
                id="btnNew"
                name="btnNew"
            >
                Novo Usuario
            </button>
            </div>
            <br />
            <div className="row">
            <table className="table table-hover">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">Nome</th>
                </tr>
                </thead>
                <tbody>
                {this.state.listUsers
                    ? this.state.listUsers.map((item) => (
                            <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>{item.email}</td>
                            <td>{item.nome}</td>
                            </tr>
                    ))
                    : ''}
                </tbody>
            </table>
            </div>
        </div>
        </React.Fragment>
    );

    static propTypes = {
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };
    }

export default withRouter(Users);

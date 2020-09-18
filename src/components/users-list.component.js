import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserInfo = props => (
    <tr>
        <td>{props.user.firstName}</td>
        <td>{props.user.lastName}</td>
        <td>{props.user.phone}</td>
        <td>{props.user.email}</td>
        <td>{props.user.street1}</td>
        <td>{props.user.city}</td>
        <td>{props.user.province}</td>
        <td>{props.user.country}</td>
        <td>
            <Link to={"/edit/"+props.user._id}>Edit</Link>
        </td>
    </tr>
)


class UsersList extends Component {

    constructor(props) {
        super(props);
        this.state = { userList: [] };
    }

    componentDidMount() {
        axios.get('https://mmd-db-connector.vercel.app/users')
            .then(response => {
                this.setState({ userList: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    userMapping(){
        return this.state.userList.map((userData, i) => {
            return <UserInfo user = {userData} key={i}/> 
        })
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Street</th>
                            <th>City</th>
                            <th>Province</th>
                            <th>Country</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userMapping()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UsersList;
import React, { Component } from 'react';
import axios from 'axios';

class CreateUser extends Component {

    constructor(props) {
        super(props);

        this.onChangeFormData = this.onChangeFormData.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            createdAt: Date.now(),
            street1: "",
            street2: "",
            city: "",
            province: "",
            country: ""
        }
        console.log(`Created At: ${this.state.createdAt}`)
        this.onChangeFormData = this.onChangeFormData.bind(this);
    }

    onChangeFormData(e) {

        let textId = e.target.id;


        if (textId === "firstName")
            this.setState({
                firstName: e.target.value
            })
        else if (textId === "lastName")
            this.setState({
                lastName: e.target.value
            })
        else if (textId === "phone")
            this.setState({
                phone: e.target.value
            })
        else if (textId === "email")
            this.setState({
                email: e.target.value
            })
        else if (textId === "street1")
            this.setState({
                street1: e.target.value
            })
        else if (textId === "street2")
            this.setState({
                street2: e.target.value
            })
        else if (textId === "city")
            this.setState({
                city: e.target.value
            })
        else if (textId === "province")
            this.setState({
                province: e.target.value
            })
        else if (textId === "country")
            this.setState({
                country: e.target.value
            })
        else
            console.log("error");
    }



    onSubmit(e) {
        e.preventDefault();

        const { firstName, lastName, phone, email, street1, street2, city, province, country, createdAt } = this.state;
        axios.post("https://mmd-db-connector.vercel.app/users/addUser", { firstName, lastName, phone, email, street1, street2, city, province, country, createdAt })
            .then(res => {
                alert("user added sucessfully !!");
            })
            .catch((err) => { console.log("something went wrong..") })
    }


    render() {
        return (
            <div style={{ marginTop: 10 }}>

                <h3>Create New User</h3>
                <hr />
                <form onSubmit={this.onSubmit}>

                    {/* FIRST NAME AND LAST NAME */}
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6 md-6">
                                <label >First Name: </label>
                                <input type="text"
                                    className="form-control"
                                    id="firstName"
                                    value={this.state.firstName}
                                    onChange={this.onChangeFormData} />
                            </div>
                            <div className="col-sm-6 md-6">
                                <label >Last Name: </label>
                                <input type="text"
                                    id="lastName"
                                    className="form-control"
                                    value={this.state.lastName}
                                    onChange={this.onChangeFormData} />
                            </div>
                        </div>
                    </div>

                    {/* PHONE EMAIL FIELDS */}
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6 md-6">
                                <label>Phone: </label>
                                <input type="text"
                                    className="form-control"
                                    id="phone"
                                    value={this.state.phone}
                                    onChange={this.onChangeFormData} />
                            </div>
                            <div className="col-sm-6 md-6">
                                <label >Email: </label>
                                <input type="text"
                                    id="email"
                                    className="form-control"
                                    value={this.state.email}
                                    onChange={this.onChangeFormData} />
                            </div>
                        </div>
                    </div>

                    {/* STREET1 AND STREET2 */}
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6 md-6">
                                <label >Street1: </label>
                                <input type="text"
                                    className="form-control"
                                    id="street1"
                                    value={this.state.street1}
                                    onChange={this.onChangeFormData} />
                            </div>
                            <div className="col-sm-6 md-6">
                                <label >Street2: </label>
                                <input type="text"
                                    id="street2"
                                    className="form-control"
                                    value={this.state.street2}
                                    onChange={this.onChangeFormData} />
                            </div>
                        </div>
                    </div>

                    {/* CITY STATE AND PINCODE  */}
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-4 md-4">
                                <label >City: </label>
                                <input type="text"
                                    className="form-control"
                                    id="city"
                                    value={this.state.city}
                                    onChange={this.onChangeFormData} />
                            </div>
                            <div className="col-sm-4 md-4">
                                <label >Province: </label>
                                <input type="text"
                                    id="province"
                                    className="form-control"
                                    value={this.state.province}
                                    onChange={this.onChangeFormData} />
                            </div>
                            <div className="col-sm-4 md-4">
                                <label >Country: </label>
                                <input type="text"
                                    id="country"
                                    className="form-control"
                                    value={this.state.country}
                                    onChange={this.onChangeFormData} />
                            </div>
                        </div>

                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateUser;
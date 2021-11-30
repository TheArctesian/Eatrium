import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ListMenuCompontent extends Component {
     constructor(props) {
    super(props);
    this.state = {
      menuItems : []
    };
  }
    render() {
        return (
             <div>
                <h1 classname="text-center">Menu</h1>
                <div classname="row">
                    <table classname = "table table-striped table bordered">
                        <thead>
                            <tr>
                                <th> Name </th>
                                <th> Description </th>
                                <th> Type </th>
                                <th> Price </th>
                            </tr>
                        </thead>
                        <tbody>
                            this.state.menuItems.map(
                                menuItems =>
                                <tr> key = {menuItems.id}
                                    <td> {menuItems.name} </td>
                                    <td> {menuItems.description} </td>
                                    <td> {menuItems.type} </td>
                                    <td> {menuItems.price} </td>
                                </tr>
                                
                            )
                        </tbody>
                    </table>
            </div>
            </div>
        )
    }

}
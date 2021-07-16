import React from 'react';
import './style/cadastro.css';
import { MdModeEdit } from "react-icons/md";

const Setor = () => {
    return(
        <div className="container_cadastro mt-4">
            <button type="button" class="btn btn-success mb-4">Add Setor</button>
            <table class="table table-borderless">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Sector</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Text</td>
                        <td></td>
                        <td></td>
                        <td> <MdModeEdit /> </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Text</td>
                        <td></td>
                        <td></td>
                        <td> <MdModeEdit /> </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Text</td>
                        <td></td>
                        <td></td>
                        <td> <MdModeEdit /> </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Text</td>
                        <td></td>
                        <td></td>
                        <td> <MdModeEdit /> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Setor;

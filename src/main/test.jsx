import React, { Component } from 'react';

export default class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            candidatos: [],
            isLoades: false,
        }
    }

    componentDidMount() {
        fetch('http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2018/BR/2022802018/1/candidatos/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoades: true,
                    candidatos: json.candidatos,
                })
            })
        //var candidatos: this.candidatos.candidatos;
    }

    render() {

        var { isLoades, candidatos } = this.state;
        if (!isLoades) {
            return <div>Loading...</div>

        }
        else {
            return (
                <div>

                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Candidato</th>
                                <th>Numero</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        
                            {candidatos.map((candidato, index) => {
                                return (
                                    <tbody>
                                    <tr key={candidato.id}>
                                        <th scope="row">{index}</th>
                                        <td>{candidato.nomeUrna}</td>
                                        <td>{candidato.numero}</td>
                                        <td>{candidato.descricaoSituacao}</td>
                                    </tr>
                                    </tbody>
                                )
                            })};
                        
                    </table>
                </div>
            )
        }
    }

}
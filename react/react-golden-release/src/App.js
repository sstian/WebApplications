import React from 'react';
import "./App.css"

import {AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

import "ag-grid-enterprise"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {headerName: "Make", field: "make", sortable: true, filter: true, editable: true, checkboxSelection: true},
        {headerName: "Model", field: "model", sortable: true, filter: true, editable: true, 
        cellEditor: "agSelectCellEditor", cellEditorParams: { values: ["18", "19", "20", ""] } },

        {headerName: "Model", field: "model", sortable: true, filter: true, editable: true},
        {headerName: "Model", field: "model", sortable: true, filter: true, editable: true},
        {headerName: "Model", field: "model", sortable: true, filter: true, editable: true},
        {headerName: "Model", field: "model", sortable: true, filter: true, editable: true},
        {headerName: "Model", field: "model", sortable: true, filter: true, editable: true},
        {headerName: "Model", field: "model", sortable: true, filter: true, editable: true},
        {headerName: "Model", field: "model", sortable: true, filter: true, editable: true},

        {headerName: "Price", field: "price", sortable: true, filter: true, editable: true}
      ],
      // rowData: [
      //   {make: "Toyota", model: "Celica", price: 35000},
      //   {make: "Ford", model: "Mondeo", price: 32000},
      //   {make: "Porsche", model: "Boxter", price: 72000}
      // ]
      rowData: null
    };
  }

  componentDidMount() {
    fetch("https://www.ag-grid.com/example-assets/row-data.json")
    .then(res => res.json())
    .then(rowData => this.setState({rowData}))
    .catch(error => console.log(error));
  }

  onButtonClick = () => {
    const selectedNodes = this.gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataString = selectedData.map(node => node.make + " " + node.model).join(", ");
    alert(`Selected data: ${selectedDataString}`);
  }

  render() {
    return (
      <div 
        className="ag-theme-alpine fill-window" 
        // style={{height: "100%", width: "100%"}}
     >
       <button onClick={this.onButtonClick}>Get Selected Rows</button>
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}
          rowSelection="multiple"
          onGridReady={params => this.gridApi = params.api}
          singleClickEdit={true}
        />
    </div>
    );
  }
}

export default App;

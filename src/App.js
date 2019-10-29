import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super()
    this.state = {
      salaryInfo: [],
      salaryTypeName: '',
      fixedSalary: '',
      incentive: '',
      minOrders: '',
      employeeInfo: [],
      employeeName: '',
      employeeOrdersDone: '',
      employeeSalaryType: ''
    }
  }
  submitForm(e) {
    e.preventDefault()
    const { salaryTypeName, fixedSalary, incentive, minOrders, salaryInfo } = this.state
    // creating object
    const salaryInfoObj = {
      salaryTypeName,
      fixedSalary,
      incentive,
      minOrders
    }

    // adding object in array
    salaryInfo.push(salaryInfoObj)
    this.setState({
      salaryInfo
    })
    console.log(salaryInfo);
    e.target.reset()

  }

  textChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  renderTable() {
    const salaryInfo = this.state.salaryInfo;
    const data = salaryInfo.map((d, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}
          </td>
          <td>{d.salaryTypeName}
          </td>
          <td>{d.fixedSalary}
          </td>
          <td>{d.incentive}
          </td>
          <td>{d.minOrders}
          </td>
        </tr>
      )
    })
    return data;
  }

  renderSalaryType() {
    const salaryInfo = this.state.salaryInfo;
    const data = salaryInfo.map((d, i) => {
      return (
        <option key={i}>
          {d.salaryTypeName}
        </option>
      )
    })
    return data;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={this.submitForm.bind(this)}>
              <h2>Salary Info</h2>
              <MyInput name="salaryTypeName"
                value={this.state.salaryTypeName}
                title="Salary Type Name"
                Change={this.textChange.bind(this)}></MyInput>
              <MyInput name="fixedSalary"
                value={this.state.fixedSalary}
                title="Fixed Salary"
                Change={this.textChange.bind(this)}></MyInput>
              <MyInput name="incentive"
                value={this.state.incentive}
                title="Incentive"
                Change={this.textChange.bind(this)}></MyInput>
              <MyInput name="minOrders"
                value={this.state.minOrders}
                title="Min Orders"
                Change={this.textChange.bind(this)}></MyInput>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Salary Type Name</th>
                  <th>Fixed Salary</th>
                  <th>Incentive</th>
                  <th>Min Orders</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTable()}
              </tbody>
            </table>
          </div>
          <div className="col-sm-6">
            <form onSubmit={this.submitForm.bind(this)}>
              <h2>Employee Info</h2>
              <MyInput name="employeeName"
                value={this.state.employeeName}
                title="Employee Name"
                Change={this.textChange.bind(this)}></MyInput>
              <MyInput name="employeeOrdersDone"
                value={this.state.employeeOrdersDone}
                title="Employee Orders Done"
                Change={this.textChange.bind(this)}></MyInput>
              <div className="form-group">
                <select className="form-control " value={this.state.employeeSalaryType}
                  onChange={this.textChange.bind(this)}>
                  {this.renderSalaryType()}</select></div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Salary Type Name</th>
                  <th>Fixed Salary</th>
                  <th>Incentive</th>
                  <th>Min Orders</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTable()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const MyInput = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.title}</label>
      <input required className="form-control"
        id={props.name} name={props.name} value={props.theValue}
        onChange={props.Change} />
    </div>
  )
}
export default App;

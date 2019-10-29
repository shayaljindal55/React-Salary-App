import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super()
    this.state = {
      salaryInfo: [],
      salaryTypeName: '',
      fixedSalary: '',
      incentive: '',
      minOrders: ''
    }
  }
  submitForm(e) {
    e.preventDefault()
    const { salaryTypeName, fixedSalary, includes, minOrders, salaryInfo } = this.state
    // creating object
    const salaryInfoObj = {
      salaryTypeName,
      fixedSalary,
      includes,
      minOrders
    }

    // adding object in array
    salaryInfo.push(salaryInfoObj)
    this.setState({
      salaryInfo
    })
    console.log(salaryInfo);

  }

  textChange(e) {
    this.setState({
      [e.target.name]: e.target.name
    })
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

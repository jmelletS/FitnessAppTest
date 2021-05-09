import React from 'react'
import ExercisesForm from '../Components/ExerciseForm'
import Card from '../Components/Card'

class ExercisesNew extends React.Component {

    state = {
        form: {
            title:'',
            description:'',
            leftcolor:'',
            rightcolor:'',
            img:''
        }
    }
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {

        return (
            <div className="row">
                <div className="col-sm">
                    <Card{...this.state.form}></Card>
                </div>
                <div className="col-sm">
                    <div className="col-sm">
                        <ExercisesForm onchange={this.handleChange} form={this.state.form}></ExercisesForm>
                    </div>
                </div>
            </div>

        )

    }

}

export default ExercisesNew
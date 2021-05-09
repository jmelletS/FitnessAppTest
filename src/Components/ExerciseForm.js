import React from 'react'

class ExercisesForm extends React.Component{

    /*constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        console.log(this)
    }*/
    state = {}

    handleChange = e =>{
        /*console.log(`${e.target.name}: ${e.target.value}`)*/

        /*let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(partialState)*/


        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render(){
        const { onchange , form} = this.props
        return (
            <div className="container">
            <form onSubmit = {this.handleSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="title" 
                        name="title"
                        onChange={onchange}
                        value={form.title}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="description" 
                        name="description"
                        onChange={onchange}
                        value={form.description}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="img" 
                        name="img"
                        onChange={onchange}
                        value={form.img}
                    />
                </div>
                <div className="form-row">
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="leftColor" 
                            name="leftColor"
                            onChange={onchange}
                            value={form.leftColor}
                        />
                    </div>
                    <div className="col">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="rightColor" 
                            name="rightColor"
                            onChange={onchange}
                            value={form.rightColor}
                        />    
                    </div>
                </div>
                
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
        )
    }

}

export default ExercisesForm
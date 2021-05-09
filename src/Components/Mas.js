import React from 'react'
import './Styles/AddButton.css'
import { Link } from 'react-router-dom'

const AddButton =() =>{
    return (<Link to="/exercise/new">
    <div className="p-5">
        <img src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d" className="Fitness-Add" alt="exercise"></img>
    </div>
</Link>)
}
//Con funcion
/*function AddButton() {
    return (<link to="/exercise/new">
        <div className="p-5">
            <img src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d" className="Fitness-Add" alt="exercise"></img>
        </div>
    </link>)
}*/

//Con una Clase
/*class ImagenMas extends React.Component {
    render() {
        return (
            <Link to="/exercise/new">
                <div className="p-5">
                    <div className="col-6">
                        <img src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d" className="Fitness-Add" alt="exercise"></img>
                    </div>
                </div>
            </Link>
        )
    }
}*/




export default AddButton
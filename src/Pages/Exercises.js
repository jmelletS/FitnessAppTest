import react from 'react'
import Welcome from '../Components/Welcome'
import ExerciseList from '../Components/ExercisesList'
import ImagenMas from '../Components/Mas'
import Loading from '../Components/Loading'

class Exercises extends react.Component {
    

    /*constructor(props) {
        super(props)
        this.*/
        state = {
            data: [],loading : true , error : null
        }

       async componentDidMount(){
        await this.fetchExercises()
        }

        fetchExercises = async () => {

            try {
                let res = await fetch('http://localhost:8000/api/exercises')
                let data = await res.json()
    
                this.setState({
                    data,loading : false 
                }) 
            } catch (error) {
                this.setState({
                    loading : false,
                    error
                }) 
            }

            
        }

    render() {
        if (this.state.loading)
            return <Loading></Loading>
        
        return (
            <div>
                <Welcome
                    username="Michelle Mellet" />
                <ExerciseList
                    Exercises={this.state.data}
                />
                <ImagenMas/>
            </div>

        )
    }

}

export default Exercises
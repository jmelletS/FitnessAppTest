import React from 'react'
import Card from './Card'


const ExerciseList = ({Exercises}) => (

    <div>
        {Exercises.map((Exercises) => {
            return (
                <Card
                    key={Exercises.id}
                    title={Exercises.title}
                    description={Exercises.description}
                    rightColor={Exercises.rightColor}
                    leftColor={Exercises.leftColor}
                    img={Exercises.img}
                />
            )
        }
        )
        }
    </div>

)


/*function exerciseList(props) {
    return (
        <div>
            {props.Exercises.map((Exercises) => {
                return (
                    <Card
                        title={Exercises.title}
                        description={Exercises.description}
                        rightColor={Exercises.rightColor}
                        leftColor={Exercises.leftColor}
                        img={Exercises.img}
                    />
                )
            }
            )
            }
        </div>
    )
}*/

export default ExerciseList
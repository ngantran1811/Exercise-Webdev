

function IdCard(props) {
    return (
        <div> 
         <p> firstname: {props.firstName}</p>
         <p> lastname: {props.lastName} </p>
         <p> gender: {props.gender} </p>
         <p> height: {props.height}</p>
         <p> birth: {props.birth.toDateString()}</p>
         <img src={props.picture} alt="This is an image" />
         
        </div>
    )
} 
export default IdCard

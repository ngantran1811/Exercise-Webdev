let min =[]
let max =[]

function Random(props) {
    min = Math.ceil(props.min);
    max = Math.floor(props.max);
    return ( "Random value between " + props.min + " and " + props.max + " => " + Math.floor(Math.random() * (max - min + 1) + min))
} 
export default Random;


function CreditCard(props) {
    return (
        <div>
            <p>type: {props.type }</p>
            <p>**** **** **** {props.number.slice(-4)}</p>
            <p>{props.bank}</p>
            <p>owner:{props.owner}</p>
            <p>bgColor: {props.bgColor}</p>
            <p>color: {props.color}</p>
        </div>
    )
}

export default CreditCard;
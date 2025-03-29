const Button = ({ textOnButton, onclick }) => {
    const buttonStyle = {
        backgroundColor: 'rgb(3, 148, 252)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        marginTop: '5px',
        marginRight: '5px',
    }

    return <>
        <button style={buttonStyle} onClick={onclick}> {textOnButton} </button>
    </>

}
export default Button
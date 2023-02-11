import './welcome-text.css'

// Functional Component
const Index = () => {

    const persona = {
        firstName: 'Tony',
        lastName: 'Stark'
    }

    return (
        <h2 className="welcome-heading">Welcome {' ' + persona.firstName + ' ' + persona.lastName}</h2>
    )
}

export default Index;
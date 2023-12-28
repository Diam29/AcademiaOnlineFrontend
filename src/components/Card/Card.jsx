import Card from 'react-bootstrap/Card';
import Cards from '../Cards/Cards'

function BasicExample({ allServices }) {

    const allServices = allServices

    return (
        <Card className='card__container'>
            <div className='content'>
                {allServices?.map(service =>
                    <Cards service={service} key={service.id} />
                )}
            </div>
        </Card>
    );
}

export default BasicExample;
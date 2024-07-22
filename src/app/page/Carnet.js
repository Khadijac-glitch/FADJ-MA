import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cards from './Cards';

function Carnet() {
  return (
   <div>
     <Cards/> <br />
    <div className="flex gap-5 ml-6 px-40">
     
     <Card className="border border-black bg-gray-50 rounded-sm"
    style={{ width: "30rem", height: "9rem" }}
    >
      <Card.Header className='flex gap-40 border-b border-gray-700 px-6 h-12 pt-4'><strong>Inventaire</strong>
      <p className='text-sm'>Aller dans configuration</p>
      </Card.Header>
      <Card.Body>
        <Card.Text className='flex gap-8 justify-items-center m-2 pt-5'>
        <div>
            <strong>298</strong>
            <p className='text-gray-700 text-opacity-100 '>Nombre total de médicaments</p>
        </div>
        <div>
            <strong>28</strong>
            <p>Groupe de médecine</p>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="border border-black bg-gray-50 rounded-sm"
    style={{ width: "30rem", height: "9rem" }}
    >
      <Card.Header className='flex gap-40 border-b border-gray-700 px-6 h-12 pt-4'><strong>Rapport rapide</strong>
      <p className='text-sm'>Janvier 2022</p>
      </Card.Header>
      <Card.Body>
        <Card.Text className='flex gap-8 justify-items-center m-2 pt-5'>
        <div>
            <strong>70856</strong>
            <p className='text-gray-700 text-opacity-100 '>Quantité de médicaments v...</p>
        </div>
        <div>
            <strong>5288</strong>
            <p>Factures générées</p>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
   </div> <br />
   
   <div className="flex gap-5 ml-6 px-40">
   <Card className="border border-black bg-gray-50 rounded-sm"
    style={{ width: "30rem", height: "9rem" }}
    >
      <Card.Header className='flex gap-20 border-b border-gray-700 px-3 h-12 pt-4'><strong>Ma pharmacie</strong>
      <p className='text-sm '>Aller à la gestion des utilisateurs</p>
      </Card.Header>
      <Card.Body>
        <Card.Text className='flex gap-8 justify-items-center m-2 pt-5'>
        <div>
            <strong>04</strong>
            <p className='text-gray-700 text-opacity-100 text-sm '>Nombre total des fournisseurs</p>
        </div>
        <div>
            <strong>05</strong>
            <p>Nombre total des utilisateurs</p>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className="border border-black bg-gray-50 rounded-sm"
    style={{ width: "30rem", height: "9rem" }}
    >
      <Card.Header className='flex gap-40 border-b border-gray-700 px-6 h-12 pt-4'><strong>Client</strong>
      <p className='text-sm'>Aller a la page client</p>
      </Card.Header>
      <Card.Body>
        <Card.Text className='flex gap-8 justify-items-center m-2 pt-5'>
        <div>
            <strong>845</strong>
            <p className='text-gray-700 text-opacity-100 '>Nombre de clients</p>
        </div>
        <div >
            <strong>Adalimumab</strong>
            <p>Article frequemment...</p>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
   </div>
   </div>
  );
}

export default Carnet;
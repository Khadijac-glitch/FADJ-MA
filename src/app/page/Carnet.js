import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cards from './Cards';
import "./Cards.css";
import CustomCarnet from './CustomCarnet';
import CustomCart from'./CustomCart';
function Carnet() {
  return (
   <div>
     <Cards/> <br /> <br /> <br />
    <div className="carnett cards flex gap-3 ml-6 px-40">
     <CustomCarnet
     className="border border-gray-400 bg-white rounded-md"
     title="Inventaire"
     subtitle="Aller dans configuration"
     bold="298"
     nombre="Nombre total de médicaments"
     bod="28"
     groupe="Groupe de médecine"
     />
   <CustomCarnet
     className="reg code border border-gray-400  bg-gray-50 rounded-md"
     title="Rapport rapide"
     subtitle="Janvier 2022"
     bold="70856"
     nombre="Quantité de médicaments v..."
     bod="5288"
     groupe="Factures générées"
     />
   </div> 
   <br />
   <div className=" cards flex gap-3 ml-6 px-40">
<CustomCart
     className="border border-gray-400  bg-gray-50 rounded-md text-sm "
     title="Ma pharmacie"
     subtitle="Aller à la gestion des utilisateurs"
     bold="04"
     nombre="Nombre total des fournisseurs"
     bod="05"
     groupe="Nombre total des utilisateurs"
     />
     <CustomCarnet
     className=" border border-gray-400 pr--8 bg-gray-50 rounded-md text-sm "
     title="Client"
     subtitle="Aller a la page client"
     bold="845"
     nombre="Nombre de clients"
     bod="Adalimumab"
     groupe="Article frequemment..."
     />
   </div>
   </div>
  );
}

export default Carnet;
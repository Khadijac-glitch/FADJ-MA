import Card from "react-bootstrap/Card";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
function Cards() {
  return (
    <div className="flex gap-6 ml-6 px-40">
      <Card
        className="text-center rounded-sm border border-green-500"
        style={{ width: "14rem", height: "10.92rem" }}
      >
        {" "}
        <br />
        <Card.Body>
          <div className="flex justify-center">
            <Card.Title className="text-center">
              <Image
                src="/vert.png"
                width={40}
                height={40}
                className="inline-block align-middle"
              />{" "}
              <br />
              <h1 className="text-2xl inline-block align-middle ml-2">Bien</h1>
            </Card.Title>
          </div>
          <Card.Text className="text-center">Statut de l'inventaire</Card.Text>
        </Card.Body>{" "}
        <br />
        <Card.Footer className="  text-center bg-green-300 pt-1">
         Afficher le rapport détaillé 
         {/* <div><MdKeyboardDoubleArrowRight /></div> */}
        </Card.Footer>
      </Card>

      <Card
        className="text-center rounded-sm border border-yellow-500"
        style={{ width: "14rem", height: "10.92rem" }}
      >
        {" "}
        <br />
        <Card.Body>
          <div className="flex justify-center">
            <Card.Title className="text-center">
              <Image
                src="/jaune.png"
                width={40}
                height={40}
                className="inline-block align-middle"
              />{" "}
              <br />
              <h1 className="text-2xl inline-block align-middle ml-2">
                4.800.432
              </h1>
            </Card.Title>
          </div>
          <Card.Text className="text-center">
            <p>
              <strong> Revenu</strong>:janvier 2022
            </p>
          </Card.Text>
        </Card.Body>{" "}
        <br />
        <Card.Footer className="text-center bg-yellow-300 pt-1 ">
          Afficher le rapport détaillé
        </Card.Footer>
      </Card>
      
      <Card
        className="text-center rounded-sm border border-blue-500"
        style={{ width: "14rem", height: "10.92rem" }}
      >
        {" "}
        <br />
        <Card.Body>
          <div className="flex justify-center">
            <Card.Title className="text-center">
              <Image
                src="/bleu.png"
                width={40}
                height={40}
                className="inline-block align-middle"
              />{" "}
              <br />
              <h1 className="text-2xl inline-block align-middle ml-2">298</h1>
            </Card.Title>
          </div>
          <Card.Text className="text-center">
            <p>médicaments disponibles</p>
          </Card.Text>
        </Card.Body>{" "}
        <br />
        <Card.Footer className="text-center bg-blue-300 pt-1 ">
          Visiter l'inventaire
        </Card.Footer>
      </Card>

      <Card
        className="text-center rounded-sm border border-red-500"
        style={{ width: "14rem", height: "10.92rem" }}
      >
        {" "}
        <br />
        <Card.Body>
          <div className="flex justify-center">
            <Card.Title className="text-center">
              <Image
                src="/rouge.png"
                width={40}
                height={40}
                className="inline-block align-middle"
              />{" "}
              <br />
              <h1 className="text-2xl inline-block align-middle ml-2">01</h1>
            </Card.Title>
          </div>
          <Card.Text className="text-center">Pénurie de médicaments</Card.Text>
        </Card.Body>{" "}
        <br />
        <Card.Footer className="text-center bg-red-300 pt-1 ">
          Réssoudre maintenant
        </Card.Footer>
      </Card>
      <br />
    </div>
  );
}

export default Cards;

import Card from "./Card";
import "../assets/styles/contacto.css";

function Contacto() {
  const user = [
    {
      name: "José Ángel",
      lastName: "Natarén",
      age: 18,
    },
    {
      name: "José Ángel",
      lastName: "Natarén",
      age: 18,
    },
    {
      name: "José Ángel",
      lastName: "Natarén",
      age: 18,
    },
  ];

  return (
    <div className="containerContact">
      <h1 className="containerContact-header">Lista de usuarios</h1>
      <div className="containerContact-main">
        {user.map((user) => {
          return <Card name={user.name} lastName={user.lastName} />;
        })}
      </div>
    </div>
  );
}

export default Contacto;

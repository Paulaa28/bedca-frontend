import React, { useState } from "react";
import Input from "../components/Input";
import Textarea from "../components/TextArea";
import Button from "../components/Button";
import Label from "../components/label";
import Title from "./Title";
import Text from "./Text";
import { FormattedMessage } from "react-intl";
// despues en los elementos o componentes
/* <FormattedMessage id="el di que usaremos al cambiar de idioma"
 defaultMessage="el mensaje que aparecera por defecto en este caso ingles" */
function Form() {
  const text = {

    id:
    "info-form", 
    texto:
      "Si desea ponerse en contacto con nosotros por alguna duda relacionada con la API. O, por otras circunstacias, escriba sus datos en el siguiente apartado.  Nos pondremos en contacto con usted lo más pronto posible.",
    texto1:
      "If you want to contact us with any questions related to the API. Or, for other circumstances, write your data in the next section. We will get in touch with you as soon as possible. ",
  };
  const input = {
    name: "Email",
    placeholder: "Write your email",
  };
  const textArea = {
    name: "Message",
    placeholder: "Coment here",
  };
  // const submit = {
  //   name: "send",
  //   value: "Send",
  // };
  const [data, setData] = useState({
    Email: "",
    Mensaje: "",
  });
  const handleInputChange = (event) => {
    console.log(event.target.name);
    setData({
      ...data,
      //relaciona los datos de la funcion data con su name y el valor
      [event.target.name]: event.target.value,
    });
  };
  const sendData = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + data.Email + " " + data.Mensaje);
  };

  return (
    <div className="formulario">
    <FormattedMessage id="title.value" defaultMessage="Contact">
          {(value) =>  <Title className="title" value={value} />}
        </FormattedMessage>
        <FormattedMessage id="text.value" defaultMessage={text.texto1}>
          {(value) => <Text className="text" id={text.id} value={value}><p>a</p></Text>}
        </FormattedMessage>
      <form onSubmit={sendData}>
      <FormattedMessage id="label.email" defaultMessage="Email">
          {(value) => <Label htmlFor={input.name} 
          value={value}></Label>}
        </FormattedMessage>
        <FormattedMessage id="input.placeholder" defaultMessage="Write your email">
          {(placeholder) =>  <Input
          name={input.name}
          placeholder={placeholder}
          onChange={handleInputChange}
        />}
        </FormattedMessage>
         <FormattedMessage id="label.message" defaultMessage="Message">
          {(value) => <Label htmlFor={input.name} 
          value={value}></Label>}
        </FormattedMessage>
        
        <FormattedMessage id="textArea.value" defaultMessage="Coment here">
          {(placeholder) => <Textarea name={textArea.name}
          onChange={handleInputChange}
          placeholder={placeholder} />}
        </FormattedMessage>
        {/* <Textarea
          name={textArea.name}
          placeholder={textArea.placeholder}
          onChange={handleInputChange}
        /> */}
        <FormattedMessage id="submit.value" defaultMessage="send">
          {(value) => <Button value={value} />}
        </FormattedMessage>
      </form>
    </div>
  );
}

export default Form;





// Para cambiar el idioma de los componentes, rodeamos al elemento 
// con FormattedMessage despues ponemos un id que lo buscare los JSON
// de us y es para cambiar su valor y un mensaje de defaultMessage que
// en este caso sera en ingles  le pasamos el valor o placeholder al componente
// y con las props accedemos a el
// <FormattedMessage id="submit.value" defaultMessage="send">
//           {(value) => <Button value={value} />}
//         </FormattedMessage>



// voy por el Textarea. me falta ver si al hacerlo objeto puedo pasar mas 
// atributos y despues ya traducir todos los demas elementos
export const EmailTemplate = ({
  firstName,
  lastName,
  phone,
  email,
  comment,
}) => (
  <div>
    <h1>NOMBRE DE USUARIO, {firstName}!</h1>
    <h1>APELLIDO, {lastName}</h1>
    <h1>TELEFONO, {phone}</h1>
    <h1>CORREO, {email}</h1>
    <h1>COMENTARIO, {comment}</h1>
  </div>
);

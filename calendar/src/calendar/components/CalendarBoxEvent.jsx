

// export const CalendarBoxEvent = ({event}) => {
// const {title, user} = event;


//   return (
//   <>
//   <strong> {title}</strong>
//   <span> {user.name}</span> 
//   </>
//   )
// }



//CHAT GPT
export const CalendarBoxEvent = ({ event }) => {
  // Asegurarse de que event y user existan
  if (!event || !event.title || !event.user) {
      return <div>Evento no disponible</div>; // Manejo de caso cuando los datos no existen
  }

  const { title, user } = event;

  return (
      <>
          <strong>{title}</strong>
          <span>{user.name}</span>
      </>
  );
};

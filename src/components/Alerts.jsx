import { confirmAlert } from "react-confirm-alert";



export default function Alerts({
  title, message, handleChange

}){

  const options = {
    title: title,
    message: message,
    buttons: [
      {
        label: 'Si',
        onClick:handleChange(true)
      },
      {
        label: 'No',
        onClick:handleChange(false)
      }
    ],
    closeOnEscape: true,
    closeOnClickOutside: true,
    overlayClassName: "overlay-custom-class-name"
  };
  return(
    confirmAlert(options)

  )
  
  

}



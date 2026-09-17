import Swal from "sweetalert2";
const successToast = ({ message }) => {
  Swal.fire({
    title: `Succès`,
    text: message,
    icon: "success",
    toast: true,
    position: "bottom-end",
    timer: 10000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
const errorToast = ({ customCode, message }) => {
  Swal.fire({
    title: `Erreur : ${customCode}`,
    text: message,
    icon: "error",
    toast: true,
    position: "bottom-end",
    timer: 10000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
const infoToast = ({ message }) => {
  Swal.fire({
    title: `Info`,
    text: message,
    icon: "info",
    toast: true,
    position: "bottom-end",
    timer: 10000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};
export { successToast, errorToast, infoToast };

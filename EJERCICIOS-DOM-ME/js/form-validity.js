const d = document;

export default function validityForm() {
  const $name = d.getElementById("txtname"),
    $email = d.getElementById("txtemail"),
    $affair = d.getElementById("txtaffair"),
    $comment = d.getElementById("txtcomment"),
    $contactForm = d.querySelector(".contact-form");

  const $div = d.createElement("div");

  const setInput = (callback, $target) => {
    let result = callback($target.value);
    if (result !== true) {
      $div.textContent = result;
      $div.classList.add("error");
      $target.insertAdjacentElement("afterend", $div);
    } else {
      $div.classList.remove("error");
      if ($target.parentElement.children.length > 2) {
        $target.parentElement.removeChild($div);
      }
    }
  };

  d.addEventListener("keyup", (e) => {
    if (e.target === $name) setInput(validityName, $name);
    if (e.target === $email) setInput(validityEmail, $email);
    if (e.target === $affair) setInput(validityAffair, $affair);
    if (e.target === $comment) setInput(validityComment, $comment);
  });

  d.addEventListener("submit", (e) => {
    // e.preventDefault();
    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");

    $loader.classList.remove("none");
    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $contactForm.reset();
      setTimeout(() => $response.classList.add("none"), 2000);
    }, 3000);
  });
}

const validityName = (name) => {
  if (!name) return "No ingresaste un nombre";
  name = name.trim().replace(/\s\s+/g, " "); // Nombre limpio
  let nameExpReg = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  return nameExpReg.test(name) ? true : "El valor ingresado no es un nombre";
};

const validityEmail = (email) => {
  if (!email) return "No ingresaste un correo electronico";
  let emailExpReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;
  return !emailExpReg.test(email) ? "El correo electronico ingresado no es correcto" : true;
};

const validityAffair = (affair) => {
  if (!affair) return "No ingresaste un asunto";
  if (affair.length > 50) return "El asunto no debe esceder los 50 caracteres";
  return true;
};

const validityComment = (comment) => {
  if (!comment) return "No ingresaste un comentario";
  if (comment.length > 255) return "El comentario no debe esceder los 255 caracteres";
  return true;
};

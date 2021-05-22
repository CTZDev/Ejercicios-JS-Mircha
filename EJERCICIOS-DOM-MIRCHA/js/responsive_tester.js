const d = document;
export default function responsiveTester(idForm) {
  const $form = d.getElementById(idForm);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      tester = window.open($form.txturl.value, "tester", `innerWidth=${$form.txtwidth.value} ,innerHeight=${$form.txtheight.value}`);
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $form.btnClose) tester.close();
  });
}

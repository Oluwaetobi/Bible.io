/** Function to make logos slide  */
const warning_note = localStorage.getItem('warning_important')
console.log(warning_note)

const logos = document.querySelector(".sliding-logos__track").cloneNode(true)
document.querySelector(".sliding-logos").appendChild(logos)
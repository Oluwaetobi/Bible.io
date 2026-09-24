/** Function to make logos slide  */
const warning_note = localStorage.getItem('warning_important')
console.log(warning_note)

const logos = document.querySelector(".sliding-logos__track").cloneNode(true)
document.querySelector(".sliding-logos").appendChild(logos)

var i_am_a_developer = false;
const developer_tools = JSON.parse(localStorage.getItem('i_am_a_developer'));
if (developer_tools) {
    i_am_a_developer = developer_tools;
}
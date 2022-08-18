export default (date) => {
    const ElementoFecha = document.createElement('li');
    ElementoFecha.classList.add('date');
    ElementoFecha.innerHTML = date;
    return ElementoFecha;
}
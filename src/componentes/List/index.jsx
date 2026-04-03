import './style.css'

function List ({
  title,
  subtitleSecondList
}) {
  return (
    <section>
      <h2 id="exercicio1">{ title }</h2>

      <h3>
        { subtitleSecondList }
      </h3>
      <ul id="ul">
        <li>oléo</li>
        <li>banana</li>
        <li>energético</li>
      </ul>

      <h3>Lista ordenada</h3>
      <ol>
        <li>Rottweiller</li>
        <li>Pitbull</li>
        <li>Chihuahua</li>
      </ol>

    </section>
  )
}
export default List
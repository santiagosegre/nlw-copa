let delay = -0.5

function createGroup(group, player1, player2, player3, player4) {
  delay = delay + 0.5
  return `
  <div class="group" style="animation-delay: ${delay}s">
      <h2>${group}</h2>
      <ul>
    <li>
      <img src="../assets/teams/icon-${player1}.svg" alt="flag ${player1}">
      <span>
          ${player1}
      </span>
  </li>
    <li>
      <img src="../assets/teams/icon-${player2}.svg" alt="flag ${player2}">
      <span>
          ${player2}
      </span>
  </li>
    <li>
      <img src="../assets/teams/icon-${player3}.svg" alt="flag ${player3}">
      <span>
          ${player3}
      </span>
  </li>
    <li>
      <img src="../assets/teams/icon-${player4}.svg" alt="flag ${player4}">
      <span>
          ${player4}
      </span>
  </li>
      </ul>
  </div>
  `
}

document.querySelector("#groups").innerHTML =
  createGroup("Grupo a", "qatar", "ecuador", "senegal", "netherlands") +
  createGroup("Grupo b", "england", "iran", "united-states", "wales") +
  createGroup("Grupo c", "argentina", "saudi-arabia", "mexico", "poland") +
  createGroup("Grupo d", "france", "denmark", "tunisia", "australia") +
  createGroup("Grupo e", "spain", "germany", "japan", "costa-rica") +
  createGroup("Grupo f", "belgium", "canada", "morocco", "croatia") +
  createGroup("Grupo g", "brazil", "serbia", "switzerland", "cameroon") +
  createGroup("Grupo h", "portugal", "ghana", "uruguay", "south-korea")

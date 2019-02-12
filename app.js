const players = [
    {
    name: "Jay",
    score: 50,
    id: 1
  },
  {
    name: "Logan",
    score: 85,
    id: 2
  },
  {
    name: "Flash",
    score: 95,
    id: 3
  },
  {
    name: "Gambit",
    score: 80,
    id: 4
  }
]

const Header = (props) =>
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>

const Player = (props) => 
        <div className="player">
            <span className="player-name">
                { props.name }
            </span>
            <Counter score={ props.score }/>
        </div>

const Counter = (props) =>
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score"> { props.score } </span>
        <button className="counter-action increment"> + </button>
    </div>

const App = (props) =>
    <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={ props.initialPlayers.length } />

        {/* Players list*/}

        {props.initialPlayers.map( player => <Player name={ player.name } score={ player.score } key={ player.id.toString() } /> )}
    </div>

ReactDOM.render(
    <App initialPlayers={ players }/>,
    document.getElementById('root')
)
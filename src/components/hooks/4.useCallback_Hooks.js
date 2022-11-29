/*useCallback ki help se hum apni app's performance ko sudhar sakte hai.
Specifically yaha humri app ke hur time bar-bar banne wale function or component ko rerendar hone se rokta hai. esa hone se humari app ki performance down hoti hai.
*/
Example ke hisab se agar hum Playlist ki taraf wapas jate hai. or humare Array main player fir se add karte hai. to hume niche ek function add karna hoga.
jub hum player remove karne ke liye new function add karte hai vis prop. to function humesha recreate hota rahata hai.
is problem ko fix karne ke liye hume ise useCallback function main wrap karna hoga. or ek argument add karna hoga dependencies array ke liye. 


function App() {
  const [player, setPlayer] = React.useState("");
  const [players, setPlayers] = React.useState(["Messi", "Ronaldo", "Laspada"]);

  function handleChangeInput(event) {
    setPlayer(event.target.value);
  }
  function handleAddPlayer() {
    setPlayers(players.concat(player));
  }
  const handleRemovePlayer = useCallback(player => {
    setPlayers(players.filter((p) => p !== player));
  }, [players])

  return (
    <>
      <input onChange={handleChangeInput} />
      <button onClick={handleAddPlayer}>Add Player</button>
      <PlayerList players={players} handleRemovePlayer={handleRemovePlayer} />
    </>
  );
}

function PlayerList({ players, handleRemovePlayer }) {
  return (
    <ul>
      {players.map((player) => (
        <li key={player} onClick={() => handleRemovePlayer(player)}>
          {player}
        </li>
      ))}
    </ul>
  );
}


const FighterTeam = ({ team, handleRemoveFighter }) => {
    return (
        <>
            {team.map((fighter, index) => (
                <div className="team-stats" key={index}>
                    <ul>
                        <li><img src={fighter.img}></img></li>
                        <li>{fighter.name}</li>
                        <li>Price: {fighter.price}</li>
                        <li>Strength: {fighter.strength}</li>
                        <li>Agility: {fighter.agility}</li>
                        <button onClick={() => {
                            handleRemoveFighter(fighter)
                        }}>Remove</button>
                    </ul>
                </div>
            ))
            }
        </>
    )
}

export default FighterTeam;
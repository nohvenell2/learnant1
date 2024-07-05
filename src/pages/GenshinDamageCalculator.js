import React from "react"
const GenshinDamageCalculator=()=>{
    return (
        <div className="container">
            <h1>Genshin Impact Damage Calculator</h1>
            <form id="damageForm">
                <div className="form-group">
                    <label for="baseAttack">Base Attack:</label>
                    <input type="number" id="baseAttack" required/>
                </div>

                <div className="form-group">
                    <label for="attackPercentage">Attack Percentage (%):</label>
                    <input type="number" id="attackPercentage" required/>
                </div>

                <div className="form-group">
                    <label for="flatAttack">Flat Attack:</label>
                    <input type="number" id="flatAttack" required/>
                </div>

                <div className="form-group">
                    <label for="damageBonus">Damage Bonus (%):</label>
                    <input type="number" id="damageBonus" required/>
                </div>

                <div className="form-group">
                    <label for="critRate">Crit Rate (%):</label>
                    <input type="number" id="critRate" required/>
                </div>

                <div className="form-group">
                    <label for="critDamage">Crit Damage (%):</label>
                    <input type="number" id="critDamage" required/>
                </div>

                <div className="form-group">
                    <label for="enemyResistance">Enemy Resistance (%):</label>
                    <input type="number" id="enemyResistance" required/>
                </div>

                <div className="form-group">
                    <label for="reactionMultiplier">Reaction Multiplier:</label>
                    <input type="number" id="reactionMultiplier" required/>
                </div>

                <div className="form-group">
                    <label for="elementalMastery">Elemental Mastery:</label>
                    <input type="number" id="elementalMastery" required/>
                </div>

                <button type="button" onClick={()=>0/**/}>Calculate Damage</button>
            </form>

            <h2>Calculated Damage:</h2>
            <p id="result">0</p>
        </div>

    )
}
export default GenshinDamageCalculator;
function calculateDamage(DamageSource) {
    // Get values from the form
    const baseAttack = DamageSource[0];
    const attackPercentage = DamageSource[1] / 100;
    const flatAttack = DamageSource[2];
    const damageBonus = DamageSource[3] / 100;
    const critRate = DamageSource[4] / 100;
    const critDamage = DamageSource[5] / 100;
    const enemyResistance = DamageSource[6] / 100;
    const reactionMultiplier = DamageSource[7];
    const elementalMastery = DamageSource[8];

    // Calculate attack power
    const attackPower = baseAttack * (1 + attackPercentage) + flatAttack;

    // Calculate crit multiplier
    const critMultiplier = 1 + critRate * critDamage;

    // Calculate resistance multiplier
    let resistanceMultiplier;
    if (enemyResistance >= 0) {
        resistanceMultiplier = 1 - enemyResistance;
    } else {
        resistanceMultiplier = 1 - (enemyResistance / 2);
    }

    // Calculate elemental mastery multiplier
    const elementalMasteryBonus = (16 * elementalMastery) / (2000 + elementalMastery);

    // Calculate final damage
    const finalDamage = attackPower * (1 + damageBonus) * critMultiplier * resistanceMultiplier * reactionMultiplier * (1 + elementalMasteryBonus);
    // Display result
    return finalDamage;
}
export default calculateDamage;
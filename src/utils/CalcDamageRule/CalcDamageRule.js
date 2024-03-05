/**
 * @file 伤害计算公式
 * { [ ( 加算buff + 基伤 ) * 伤害段数 ] + [ ( 额外伤害 + 加算buff) ] } * 乘算buff * debuff
 */
/**
 * 返回总伤害
 */
 const calcDamageRule = (damageInfo) => {
    let { baseDamage, damageTime, plusBuff, extraDamage, multiBuff, debuff } = damageInfo;
    /* 参数归一 (默认参数赋值) */
    damageTime ||= 1;
    plusBuff ||= 0;
    extraDamage ||= 0;

    multiBuff ||= 0;
    multiBuff = (100 + multiBuff) / 100;

    debuff ||= 0;
    debuff = (100 - debuff) / 100;


    /* 基础伤害 (计算上buff 和 段数) */
    const totalBaseDamage = Math.floor((baseDamage + plusBuff) * multiBuff) * damageTime;

    /* 额外伤害 (计算上buff) */
    const totalExtraDamage = Math.floor((extraDamage + (Number(Boolean(extraDamage)) * plusBuff)) * multiBuff);

    /* 总伤害 */
    const totalDamage = Math.floor((totalBaseDamage + totalExtraDamage) * debuff);

    console.log('totalBaseDamage: ', totalBaseDamage);
    console.log('totalExtraDamage: ', totalExtraDamage);
    console.log('totalDamage: ', totalDamage);

    /* 返回结果 */
    return totalDamage;
};

const r = calcDamageRule({
    baseDamage: 2,
    damageTime: 5,
    plusBuff: 16,
    multiBuff: 40,
});
console.log(r)
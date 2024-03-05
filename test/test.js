/**
 * 简化版伤害检测
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
};+3..7

/**
 * 牌组
 */
const CardList = {
	KUANG_FIRST: '狂剑·一式',
	KUANG_SECOND: '狂剑·二式',
};

/**
 * 玩家状态
 */
const selfStatus = {
	"剑意": 0,
	"狂": 0,
	"加攻": 0,
};


/**
 * 当前玩家牌组
 * */
const currentCardList = [
	CardList.KUANG_FIRST,
	CardList.KUANG_SECOND,
]
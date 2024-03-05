/**
 * @file 卡牌词条效果映射
 */

import { ENTRY_TYPE_ENUM } from '@/datas/interfaces/ENTRY_TYPE_ENUM';
import { calcDamageRule } from '@/utils/CalcDamageRule/CalcDamageRule';
import { useUserStore } from '@/stores/UserStore';

type entryEffectCallback = ( value: number ) => void;

/**
 * 卡牌词条效果映射
 */
const entryEffectMapper: Map<ENTRY_TYPE_ENUM, entryEffectCallback> = new Map();

/**
 * 普通攻击效果
 */
entryEffectMapper.set(
	ENTRY_TYPE_ENUM.NORMAL_ATTACK,
	/**
	 * 普通攻击
	 * 交互逻辑:
	 * 	1. 整理玩家的buff
	 * 	2. 计算总伤害
	 */
	( value ) => {
		const userStore = useUserStore();
		
		const plusBuff = userStore.calcPlusDamage();
		// TODO 整理玩家的buff
		return calcDamageRule( {
			baseDamage: value,
			plusBuff,
		} );
	} );
/**
 * 增加防御效果
 */
entryEffectMapper.set(
	ENTRY_TYPE_ENUM.NORMAL_DEFEND,
	/**
	 * 普通增加防御
	 * 交互逻辑:
	 * 	1. 增加防御
	 */
	( value ) => {
		// TODO
		return value;
	} );
/**
 * 连云攻击效果
 */
entryEffectMapper.set(
	ENTRY_TYPE_ENUM.CONTINUOUS_CLOUD_SWORD_ATTACK,
	/**
	 * 连云攻击效果
	 * 交互逻辑:
	 * 	1. 判断当前玩家是否存在 连云buff
	 * 	2. 若存在, 触发 普通攻击 效果
	 * 	3. 若不存在, 无任何效果
	 */
	( value ) => {
		const userStore = useUserStore();
		
		// 连云不存在, 无效果
		if ( !userStore.hasContinuousSwordStatus() ) {
			return;
		}
		
		// 连云存在, 触发普通攻击词条
		( <entryEffectCallback> entryEffectMapper.get( ENTRY_TYPE_ENUM.NORMAL_ATTACK ) )( value );
	} );
/**
 * 增加一层连云
 */
entryEffectMapper.set(
	ENTRY_TYPE_ENUM.CONTINUOUS_CLOUD_SWORD_APPEND,
	/**
	 * 增加一层连云buff
	 * 所有以 云剑 开头的卡牌必定携带效果
	 */
	( value ) => {
		// TODO
		return value;
	},
);


export { entryEffectMapper };
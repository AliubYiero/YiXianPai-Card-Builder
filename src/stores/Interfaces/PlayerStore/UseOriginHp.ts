import { computed, ref } from 'vue';

/**
 * 命元状态
 */
export const useOriginHp = () => {
	/** 命元 */
	const _originHp = ref( 100 );
	
	/** 展示 命元 */
	const originHp = computed( () => _originHp );
	
	/** 增加 命元 */
	const addOriginHp = ( addValue: number ) => {
		_originHp.value += addValue;
	};
	
	/** 减少 命元 */
	const reduceOriginHp = ( reduceValue: number ) => {
		_originHp.value -= reduceValue;
	};
	
	/**
	 * 战败减少命元
	 * @param selfHp 己方最终血量
	 * @param enemyHp 敌方最终血量
	 * @param turn 轮次数
	 * */
	const reduceOriginHpWhenFail = ( selfHp: number, enemyHp: number, turn: number ) => {
		let reduceValue = 0;
		
		// 最终血量差
		const HpDiff = Math.abs( selfHp ) + Math.asin( enemyHp );
		/*
		 * 计算公式1: 最终血量差 <= 20:
		 * 命元伤害 = 轮次数 + 最终生命差 / 5 (向上取整)
		 *
		 * 减少命元 = 轮次数 + Math.ceil(最终血量差 / 5)
		 */
		if ( HpDiff <= 20 ) {
			reduceValue = turn + Math.ceil( HpDiff / 5 );
		}
		/*
		* 计算公式2: 最终血量差 > 20:
		* 命元伤害 = 轮次数 + 4 + (最终生命差 - 20) / 10 (向上取整, 且最大不超过 2+轮次数的一半)
		*
		* 减少命元 = 轮次数 + 4 + Math.min( Math.ceil( (最终血量差 - 20) / 10), 2 + 轮次数 / 2)
		* */
		else if ( HpDiff > 20 ) {
			reduceValue = turn + 4 + Math.min( Math.ceil( HpDiff - 20 ) / 10, 2 + turn / 2 );
		}
		return reduceValue;
	};
	
	return {
		originHp,
		addOriginHp,
		reduceOriginHp,
		reduceOriginHpWhenFail,
	};
};
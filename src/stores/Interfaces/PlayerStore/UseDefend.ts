import { computed, ref } from 'vue';

/**
 * 防御状态
 */
export const useDefend = () => {
	/** 防御值 */
	const _defend = ref( 0 );
	
	/** 是否存在防御值 */
	const hasDefend = computed( () => Boolean( _defend ) );
	
	/** 展示当前的防御值 */
	const defend = computed( () => _defend );
	
	/** 增加防御值 */
	const addDefend = ( addValue: number ) => {
		_defend.value += addValue;
	};
	
	/** 减少防御值 */
	const reduceDefend = ( reduceValue: number ) => {
		/* 没有防御, 不消耗 */
		if ( !hasDefend.value ) {
			return;
		}
		_defend.value -= reduceValue;
	};
	
	/**
	 * 回合结束消耗防御值
	 * @param [reducePercent = 0.5] 消耗百分比 (消耗防御值向下取整)
	 * @example reduceDefendByRound(0.5) | 25 defend --> 12 defend (-13)
	 * */
	const reduceDefendByRound = ( reducePercent: number = 0.5 ) => {
		/* 没有防御, 不消耗 */
		if ( !hasDefend.value ) {
			return;
		}
		/* 向下取整 */
		_defend.value = Math.floor( _defend.value * reducePercent );
	};
	
	return {
		defend,
		hasDefend,
		addDefend,
		reduceDefend,
		reduceDefendByRound,
	};
};
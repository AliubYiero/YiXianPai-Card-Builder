import { computed, ref } from 'vue';

/**
 * 灵气状态
 */
export const useReiki = () => {
	/** 灵气值 */
	const _reiki = ref( 0 );
	
	/**
	 * 展示当前的灵气值
	 */
	const reiki = computed( () => _reiki );
	
	/**
	 * 判断当前是否存在灵气
	 */
	const hasReiki = computed( () => Boolean( _reiki.value ) );
	
	/**
	 * 增加灵气
	 */
	const addReiki = ( addValue: number ) => {
		_reiki.value += addValue;
	};
	
	/**
	 * 消耗灵气
	 */
	const reduceReiki = ( reduceValue: number ) => {
		if ( !hasReiki.value ) {
			throw new Error( '无灵气可以消耗' );
		}
		_reiki.value -= reduceValue;
	};
	
	/**
	 * 回合结束消耗灵气值
	 */
	const reduceReiKiByRound = ( reduceValue: number = 1 ) => {
		if ( !hasReiki.value ) {
			return;
		}
		_reiki.value -= reduceValue;
	};
	
	return {
		reiki,
		hasReiki,
		addReiki,
		reduceReiki,
		reduceReiKiByRound,
	};
};
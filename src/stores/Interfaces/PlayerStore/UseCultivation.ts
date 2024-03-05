import { computed, ref } from 'vue';
import type { CultivationType } from '@/datas/interfaces/CultivationType';
import { compareNumberRange } from '@/utils/CompareNumberRange';

/**
 * 修为境界状态
 */
export const useCultivation = () => {
	/**
	 * 修为数值
	 */
	const _cultivationValue = ref( 0 );
	
	/** 展示修为数值 */
	const cultivationValue = computed( () => _cultivationValue );
	
	/** 展示境界 */
	const cultivation = computed( () => {
		let cultivation: CultivationType;
		
		if ( compareNumberRange( _cultivationValue.value, 0, 8 ) ) {
			cultivation = '练气期';
		}
		else if ( compareNumberRange( _cultivationValue.value, 9, 20 ) ) {
			cultivation = '筑基期';
		}
		else if ( compareNumberRange( _cultivationValue.value, 21, 35 ) ) {
			cultivation = '金丹期';
		}
		else if ( compareNumberRange( _cultivationValue.value, 36, 54 ) ) {
			cultivation = '元婴期';
		}
		else {
			cultivation = '化神期';
		}
		
		return cultivation;
	} );
	
	/**
	 * 增加修为数值
	 */
	const addCultivationValue = ( addValue: number ) => {
		_cultivationValue.value += addValue;
	};
	
	/**
	 * 减少修为
	 */
	const reduceCultivationValue = ( reduceValue: number ) => {
		_cultivationValue.value -= reduceValue;
	};
	return {
		cultivationValue,
		cultivation,
		addCultivationValue,
		reduceCultivationValue,
	};
};
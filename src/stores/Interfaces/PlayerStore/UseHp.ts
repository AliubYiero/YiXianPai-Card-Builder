import { computed, ref } from 'vue';

/**
 * 血量状态
 */
export const useHp = () => {
	/** 血量上限 */
	const _maxHp = ref( 40 );
	
	/** 展示血量上限 */
	const maxHp = computed( () => _maxHp );
	
	/** 增加最大生命值 */
	const addMaxHp = ( addValue: number ) => {
		_maxHp.value += addValue;
	};
	
	/** 减少最大生命值 */
	const reduceMaxHp = ( reduceNumber: number ) => {
		_maxHp.value -= reduceNumber;
	};
	
	/**
	 * 减少最大生命值 (战斗中)
	 * 防止减少最大生命值的同时扣除当前血量
	 *  */
	const reduceMaxHpInFight = ( reduceNumber: number ) => {
		/* 减少血量上线 */
		reduceMaxHp( reduceNumber );
		/* 增加 受到的伤害 (因为 Hp 是根据受到的伤害来计算的) */
		addHp( reduceNumber );
	};
	
	
	/** 当前Hp */
	const hp = computed( () => _maxHp.value - receiveDamage.value );
	
	/** 受到的伤害 (可以被回复) */
	const receiveDamage = ref( 0 );
	
	/** 累计已损失血量 (伤害统计, 无法被回复) */
	const totalInjury = ref( 0 );
	
	/** 回复Hp */
	const addHp = ( addNumber: number ) => {
		receiveDamage.value -= addNumber;
	};
	
	/** 减少Hp */
	const reduceHp = ( reduceNumber: number ) => {
		/* 增加收到的伤害 */
		receiveDamage.value += reduceNumber;
		/* 增加累计收到的伤害 */
		totalInjury.value += reduceNumber;
	};
	
	
	return {
		maxHp,
		addMaxHp,
		reduceMaxHp,
		reduceMaxHpInFight,
		
		hp,
		addHp,
		reduceHp,
	};
	
};
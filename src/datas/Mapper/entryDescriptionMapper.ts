/**
 * @file 卡牌词条描述Mapper
 */
import { ENTRY_TYPE_ENUM } from '@/datas/interfaces/ENTRY_TYPE_ENUM';

/**
 * 卡牌词条描述Mapper
 */
const entryDescriptionMapper: Map<ENTRY_TYPE_ENUM, ( value: number ) => string> = new Map();


entryDescriptionMapper
	/**
	 * 普通攻击词条
	 */
	.set(
		ENTRY_TYPE_ENUM.NORMAL_ATTACK,
		( value ) => `${ value }攻`,
	)
	/**
	 * 连云攻击词条
	 */
	.set(
		ENTRY_TYPE_ENUM.CONTINUOUS_CLOUD_SWORD_ATTACK,
		( value ) => `连云: 追加${ value }攻`,
	)
	/**
	 * 增加一层连云
	 * (不描述当前词条)
	 */
	.set(
		ENTRY_TYPE_ENUM.CONTINUOUS_CLOUD_SWORD_APPEND,
		() => ``,
	)
	/**
	 * 增加防御
	 */
	.set(
		ENTRY_TYPE_ENUM.NORMAL_DEFEND,
		( value ) => `防+${ value }`,
	)
	/**
	 * 连云 · 防御
	 */
	.set(
		ENTRY_TYPE_ENUM.CONTINUOUS_CLOUD_SWORD_DEFEND,
		( value ) => `连云: 防+${ value }`,
	);


export { entryDescriptionMapper };
import { ENTRY_TYPE_ENUM } from '@/datas/interfaces/ENTRY_TYPE_ENUM';
import type { CardInfoType } from '@/datas/interfaces/CardInfoType';
import { createCardInfoList } from '@/datas/utils/createCardInfoList';

/**
 * 牌组列表
 */
const CardList: CardInfoType[] = [
	/**
	 * 普通攻击
	 */
	...createCardInfoList( {
		name: '普通攻击',
		sect: '通用',
		cultivation: '练气期',
		entries: [
			/* 普通攻击 */
			{
				valueList: [ 3, 6, 9 ],
				type: ENTRY_TYPE_ENUM.NORMAL_ATTACK,
			},
		],
	} ),
	
	/**
	 * 云剑 · 探云
	 */
	...createCardInfoList( {
		name: '云剑 · 探云',
		sect: '云灵剑宗',
		cultivation: '练气期',
		entries: [
			/* 普通攻击 */
			{
				valueList: [ 6, 9, 12 ],
				type: ENTRY_TYPE_ENUM.NORMAL_ATTACK,
			},
			/* 连云buff附加 */
			{
				valueList: [ 1, 1, 1 ],
				type: ENTRY_TYPE_ENUM.CONTINUOUS_CLOUD_SWORD_APPEND,
			},
		],
	} ),
	
	/**
	 * 云剑 · 飞刺
	 */
	...createCardInfoList( {
		name: '云剑 · 飞刺',
		sect: '云灵剑宗',
		cultivation: '练气期',
		entries: [
			/* 普通攻击 */
			{
				valueList: [ 5, 6, 7 ],
				type: ENTRY_TYPE_ENUM.NORMAL_ATTACK,
			},
			/* 连云附加攻击 */
			{
				valueList: [ 3, 5, 7 ],
				type: ENTRY_TYPE_ENUM.CONTINUOUS_CLOUD_SWORD_ATTACK,
			},
			/* 连云附加 */
			{
				valueList: [ 1, 1, 1 ],
				type: ENTRY_TYPE_ENUM.CONTINUOUS_CLOUD_SWORD_APPEND,
			},
		],
	} ),
	
	
	/**
	 * 云剑 · 厚土
	 */
	...createCardInfoList( {
		name: '云剑 · 厚土',
		sect: '云灵剑宗',
		cultivation: '练气期',
		entries: [
			/* 普通攻击 */
			{
				valueList: [ 4, 6, 8 ],
				type: ENTRY_TYPE_ENUM.NORMAL_ATTACK,
			},
			/* 增加防御 */
			{
				valueList: [ 3, 5, 7 ],
				type: ENTRY_TYPE_ENUM.CONTINUOUS_CLOUD_SWORD_DEFEND,
			},
			{
				valueList: [ 1, 1, 1 ],
				type: ENTRY_TYPE_ENUM.CONTINUOUS_CLOUD_SWORD_APPEND,
			},
		],
	} ),
];

export {
	CardList,
};
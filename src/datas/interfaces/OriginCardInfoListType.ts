import type { CardInfoType } from '@/datas/interfaces/CardInfoType';
import type { EntryType } from '@/datas/interfaces/EntryType';

/**
 * 原始 CardInfo 类型
 */
export type OriginCardInfoListType =
/* 获取 `name` `sect` `cultivation` 属性 */
		Pick<CardInfoType, 'name' | 'sect' | 'cultivation'>
		
		& {
	/* 获取 entries.type 属性 */
	entries: ( Pick<EntryType, 'type'>
			/* 新属性 entries.valueList */
			& {
		valueList: [ number, number, number ]
	} )[]
};
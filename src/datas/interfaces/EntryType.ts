import { ENTRY_TYPE_ENUM } from '@/datas/interfaces/ENTRY_TYPE_ENUM'

/**
 * 卡牌词条类型
 */
export interface EntryType {
	/**
	 * 词条描述
	 */
	description: string;
	/**
	 * 词条类型
	 */
	type: ENTRY_TYPE_ENUM;
	/**
	 * 词条ID
	 */
	entryId: string;
	/**
	 * 词条数值
	 */
	value: number;
}
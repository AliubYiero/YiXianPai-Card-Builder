import type { SectType } from '@/datas/interfaces/SectType';
import type { CultivationType } from '@/datas/interfaces/CultivationType';
import type { EntryType } from '@/datas/interfaces/EntryType';

export interface CardInfoType {
	/**
	 * 卡牌Id
	 */
	cardId: string;
	
	/**
	 * 卡牌名称
	 */
	name: string;
	
	/**
	 * 卡牌门派
	 */
	sect: SectType;
	
	/**
	 * 卡牌等级
	 */
	level: number;
	
	/**
	 * 卡牌修为
	 */
	cultivation: CultivationType;
	
	/**
	 * 卡牌词条
	 */
	entries: EntryType[];
}
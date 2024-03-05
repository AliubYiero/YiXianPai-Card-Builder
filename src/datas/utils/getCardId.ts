/**
 * @file 生成卡牌Id
 */
import type { SectType } from '@/datas/interfaces/SectType';

/**
 * 生成卡牌ID
 * 根据 [卡牌名称-卡牌门派-卡牌等级] 进行 base64 序列化
 */
export const getCardId = ( name: string, sect: SectType, level: number ) => {
	const codeString = btoa( encodeURI( `${ name }-${ sect }-${ level }` ) );
	
	return codeString;
};
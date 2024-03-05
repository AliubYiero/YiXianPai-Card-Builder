import type { SectType } from '@/datas/interfaces/SectType';

/**
 * 生成 EntryId
 * 根据 [卡牌名称-卡牌门派-词条名称-卡牌等级] 进行 base64 序列化
 */
export const getEntryId = ( name: string, sect: SectType, level: number, entryName: string ) => {
	const codeString = btoa( encodeURI( `${ name }-${ sect }-${ entryName }-${ level }` ) );
	
	return codeString;
};
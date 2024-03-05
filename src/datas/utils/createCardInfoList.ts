import type { OriginCardInfoListType } from '@/datas/interfaces/OriginCardInfoListType';
import type { CardInfoType } from '@/datas/interfaces/CardInfoType';
import { getEntryId } from '@/datas/utils/getEntryId';
import { entryDescriptionMapper } from '@/datas/Mapper/entryDescriptionMapper';
import { getCardId } from '@/datas/utils/getCardId';

/**
 * 根据原始 CardsInfo 数据创建一个包含三个 CardInfo 参数
 * (同一张卡牌的不同等级lv1, lv2, lv3)
 */
export const createCardInfoList = ( originCardInfoList: OriginCardInfoListType ):
	[ CardInfoType, CardInfoType, CardInfoType ] => {
	const {
		name,
		sect,
		cultivation,
		entries,
	} = originCardInfoList;
	
	// @ts-ignore
	const cardInfoList: [ CardInfoType, CardInfoType, CardInfoType ] = [];
	for ( let i = 0; i < 3; i++ ) {
		const level = i + 1;
		const cardId = getCardId( name, sect, level );
		cardInfoList.push( {
			cardId,
			name,
			sect,
			cultivation,
			level,
			entries: entries.map( ( entry ) => {
				const entryValue = entry.valueList[ i ];
				const entryDescriptionCallback = entryDescriptionMapper.get( entry.type );
				if ( !entryDescriptionCallback ) {
					throw new Error( `not found Entry Type Mapper in type: ${ entry.type }` );
				}
				
				const entryDescription = entryDescriptionCallback( entryValue );
				return {
					entryId: getEntryId( name, sect, level, entryDescription ),
					type: entry.type,
					description: entryDescription,
					value: entryValue,
				};
			} ),
		} );
	}
	
	
	return cardInfoList;
};
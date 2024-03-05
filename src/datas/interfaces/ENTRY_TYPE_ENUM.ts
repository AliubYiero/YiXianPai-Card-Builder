/**
 * 卡牌词条id枚举
 */
export enum ENTRY_TYPE_ENUM {
	/**
	 * 普通攻击
	 */
	NORMAL_ATTACK,
	
	/**
	 * 增加防御
	 */
	NORMAL_DEFEND,
	
	/**
	 * 消耗灵气
	 */
	COST_REIKI,
	
	/**
	 * 增加灵气
	 */
	ADD_REIKI,
	
	/**
	 * 增加连云buff
	 */
	CONTINUOUS_CLOUD_SWORD_APPEND,
	
	/**
	 * 连云 · 攻击
	 */
	CONTINUOUS_CLOUD_SWORD_ATTACK,
	
	
	/**
	 * 连云 · 防御
	 */
	CONTINUOUS_CLOUD_SWORD_DEFEND,
	
	/**
	 * 击伤 · 攻击
	 */
	INJURE_ATTACK,
}
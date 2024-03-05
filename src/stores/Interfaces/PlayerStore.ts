/**
 * @file 玩家状态类
 */

import { reactive } from 'vue';
import { useHp } from '@/stores/Interfaces/PlayerStore/UseHp';
import { useReiki } from '@/stores/Interfaces/PlayerStore/UseReiki';
import { useDefend } from '@/stores/Interfaces/PlayerStore/UseDefend';
import { useOriginHp } from '@/stores/Interfaces/PlayerStore/UseOriginHp';
import { useCultivation } from '@/stores/Interfaces/PlayerStore/UseCultivation';

export const createPlayerStatus = () => {
	
	return {
		...useHp(),
		...useReiki(),
		...useDefend(),
		...useOriginHp(),
		...useCultivation(),
	};
	
	/**
	 * buff列表
	 */
	const buffStatus = reactive( {
		/**
		 * 连云状态
		 */
		continuousSword: 0,
		
		/**
		 * 无视防御状态
		 */
		ignoreDefend: 0,
		
		/**
		 * 剑意状态
		 */
		swordSense: 0,
		
		/**
		 * 加攻状态
		 */
		addDamage: 0,
		
		/**
		 * 再次行动
		 */
		runAgain: 0,
	} );
	
	/* ----------------------- 对外开放方法(属性) -------------------------- */
	
	
	/**
	 * 计算所有加攻层数 (包括临时加攻和永久加攻)
	 * 总层数 = 加攻层数 + 剑意层数
	 */
	function calcPlusDamage() {
		return buffStatus.addDamage + buffStatus.swordSense;
	}
	
	function hasContinuousSwordStatus() {
		return !!buffStatus.continuousSword;
	}
};
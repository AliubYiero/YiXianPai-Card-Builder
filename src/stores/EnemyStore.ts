/**
 * @file 敌人状态类
 */

import { defineStore } from 'pinia';
import { createPlayerStatus } from '@/stores/Interfaces/PlayerStore';

export const useEnemyStore = defineStore( 'user', () => {
	const enemyStatus = createPlayerStatus();
	return enemyStatus;
} );
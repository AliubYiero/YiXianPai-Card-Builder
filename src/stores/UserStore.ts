/**
 * @file 玩家状态类
 */

import { defineStore } from 'pinia';
import { createPlayerStatus } from '@/stores/Interfaces/PlayerStore';

export const useUserStore = defineStore( 'user', () => {
	const userStatus = createPlayerStatus();
	return userStatus;
} ); 
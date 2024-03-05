/**
 * @file 假人傀儡状态类 (无状态只有血和debuff)
 */
import { defineStore } from 'pinia';
import { createPlayerStatus } from '@/stores/Interfaces/PlayerStore';


export const usePuppetStore = defineStore( 'puppet', () => {
	const puppetStatus = createPlayerStatus();
	puppetStatus.maxHp.value = 9999;
	return puppetStatus;
} ); 
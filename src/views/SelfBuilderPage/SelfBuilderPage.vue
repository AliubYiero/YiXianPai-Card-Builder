<!--
 - @file SelfBuilderPage.vue
 - @description 自我牌组构建页面
 - @author Yiero
 - -->

<style lang="scss" scoped>
@use "@/libs/css/mixins";

/* 玩家牌组容器样式 */
.player-deck-container {
  @include mixins.flex;
  @include mixins.flex-center;
}

/* 玩家卡牌列表样式 */
.player-deck-list {
  @include mixins.flex;
}

/* 玩家卡牌项目样式 */
.player-deck-item {
}
</style>

<template>
  <!-- 玩家牌组容器 -->
  <main class="player-deck-container">
    <ul class="player-deck-list">
      <!-- 玩家卡牌项 (共8个) -->
      <li v-for="item in currentDeck" class="player-deck-item">
        <card-component :card-info="item" />
      </li>
    </ul>
  </main>
</template>

<script lang="ts" setup>
import CardComponent from '@/components/SelfBuilderPage/Card/Card.vue';
import { useUserStore } from '@/stores/UserStore';

interface Card {
  title: string,
  description: string
}

type Deck = [ Card, Card, Card, Card, Card, Card, Card, Card ];
const currentDeck: Deck = new Array( 8 ).fill(
  { title: '普通攻击', description: '3攻', level: 1 }, 0, 3,
).fill(
  { title: '普通攻击', description: '4攻', level: 2 }, 3, 6,
).fill(
  { title: '普通攻击', description: '5攻', level: 3 }, 6, 8,
) as Deck;

const a = useUserStore();
a.maxHp = 999;
console.log( a.hp, a.maxHp );
a.reduceHp( 20 );
console.log( a.hp, a.maxHp );
</script>
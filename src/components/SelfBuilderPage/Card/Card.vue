<!--
 - @file Card.vue
 - @description 卡牌容器
 - @author Yiero
 - @create-date 2024/2/5
 - -->

<style lang="scss" scoped>
@use "@/libs/css/mixins";

@mixin border-lv1 {
	@include mixins.border-round();
	@include mixins.border($border-size, #3a3a3a);
	@include mixins.shadow();
}

@mixin border-lv2 {
	@include mixins.border-round();
	@include mixins.border($border-size, #723c18);
	@include mixins.shadow();
}

@mixin border-lv3 {
	@include mixins.border-round();
	@include mixins.border($border-size, #9a6c1e);
	@include mixins.shadow();
}

/* 样式 */
$width: 110px;
$height: 200px;
$border-size: 3px;
$image-width: 75px;
$description-height: 80px;

/* 卡片主样式 */
.card- {
	/* 主样式 */
	&item {
		@include mixins.border-box();
		@include mixins.size($width, $height);
		//@include mixins.bg-color(#beae7f);
		background: radial-gradient(at 70% 30%, #e8d4a4 1%, #a6986d 80%);
		@include mixins.relative();
	}
	
	/* 卡片标题 */
	&title {
		writing-mode: vertical-lr;
		@include mixins.absolute();
		@include mixins.font-size(16px);
		@include mixins.color(#fff);
		@include mixins.size($width - $image-width - 10px, $height - $description-height - 5px);
		@include mixins.font-center;
	}
	
	/* 卡片图片 */
	&image {
		@include mixins.border-box();
		@include mixins.border(#8f816a);
		@include mixins.absolute($top: 5px, $right: 5px);
		@include mixins.size($image-width, $height - $description-height - 5px * 2);
		@include mixins.shadow();
	}
	
	/* 卡片描述 */
	&description {
		@include mixins.absolute($bottom: 0px);
		@include mixins.size($width - 2 * $border-size, $description-height);
		@include mixins.flex;
		@include mixins.flex-center;
		@include mixins.flex-vertical-center;
		@include mixins.color();
		@include mixins.font-bold();
		@include mixins.round(5px);
		@include mixins.bg-color(#e8e7db);
		@include mixins.border($color: #82755f);
		
	}
}

/* 卡片等级颜色 */
.border-lv {
	&1 {
		@include border-lv1;
	}
	
	&2 {
		@include border-lv2;
	}
	
	&3 {
		@include border-lv3;
	}
}
</style>

<template>
	<section :class="`border-lv${cardInfo.level}`" class="card-item">
		<!-- 卡片名称 -->
		<section class="card-title">
			{{ "云剑 · 探云" }}
		</section>
		<!-- 卡片图像 -->
		<img alt="图像" class="card-image" src="">
		
		<!-- 卡片描述 -->
		<section class="card-description">
			{{ cardInfo.description }}
		</section>
	
	</section>
</template>

<script lang="ts" setup>
/* 定义卡片 props */
import { computed } from "vue";

const props = defineProps<{
	cardInfo: {
		title: string;
		description: string;
		level: number;
	}
}>();

const cardInfo = computed( () => props.cardInfo );
</script>
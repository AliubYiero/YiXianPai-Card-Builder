/**
 * @file 伤害计算公式
 * { [ ( 加算buff + 基伤 ) * 伤害段数 ] + [ ( 额外伤害 + 加算buff) ] } * 乘算buff * debuff
 */
interface DamageInfo {
    /**
     * 基础伤害
     * 整数
     *  */
    baseDamage: number;
    /**
     * 基础伤害段数
     * 整数
     * (可选参数) 默认为 1
     *  */
    damageTime?: number;
    /**
     * 额外伤害
     * 整数
     * (可选参数) 默认为 0
     */
    extraDamage?: number;
    /**
     * 加算buff
     * 整数
     * (可选参数) 默认为 0
     * */
    plusBuff?: number;
    /**
     * 乘算buff
     * (可选参数) 默认为 0
     * 正整数, 40 表示乘算 40% , 即 1.4 倍率
     * */
    multiBuff?: number;
    /**
     * debuff
     * (可选参数) 默认为 0
     * 正整数, 40 表示乘算 -40% , 即 0.6 倍率
     */
    debuff?: number;
}
/**
 * 返回总伤害
 */
export declare const calcDamageRule: (damageInfo: DamageInfo) => number;
export {};

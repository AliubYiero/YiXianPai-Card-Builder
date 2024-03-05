/**
 * 比较数字是否存在于一个数字区间之内 [minNumber, maxNumber]
 */
export const compareNumberRange = ( originNumber: number, minNumber: number, maxNumber?: number ): boolean => {
	maxNumber ||= Number.MAX_VALUE;
	return originNumber >= minNumber && originNumber <= maxNumber;
};
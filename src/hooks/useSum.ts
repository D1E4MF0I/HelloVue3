import { computed, ref } from "vue";

export default function () {
    let sum = ref(0);
    let bigSum = computed({
        get() {
            return sum.value * 10;
        },
        set(val) {
            bigSum.value = val;
        }
    });
    function add() {
        sum.value++;
    }
    return {sum, bigSum, add}
}

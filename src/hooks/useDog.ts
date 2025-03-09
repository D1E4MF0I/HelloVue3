import axios from "axios";
import { onMounted, reactive } from "vue";

export default function () {
    let dogs = reactive([]);

    async function getDog() {
        try {
            let dog = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            dogs.push(dog.data.message);
        } catch (error) {
            alert(error)
        }
    }

    onMounted(()=>{
        getDog();
    })
    return { dogs, getDog }
}

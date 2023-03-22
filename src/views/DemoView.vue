<script setup lang="ts">
import axios from 'axios'
import TableComponent from '@/components/TableComponent.vue'
import { endpoints } from "@/constants/endpoint"
import { store } from '@/store/store';
import { ACTIONS } from '@/store/action';
</script>

<script lang="ts">
export interface ApiDataTypes {
  employee_age: number;
  employee_name: string;
  employee_salary: number;
  id: number;
  profile_image?: string
}

export default {
  data() {
    const apidata: ApiDataTypes[] = [];
    const error: string = '';
    const test: number = 0;
    return {
      apidata,
      error,
      test
    }
  },
  methods: {
    fetchData() {
      try {
        axios
          .get(`${endpoints.GET_EMPLOYEES_API}/employees`)
            .then((res: any) => (this.apidata = res.data.data, console.log('typeof res', typeof res)))
            .catch((err:string) => (this.error = err))
        console.log('this.apidata => ', this.apidata)
      } catch (err) {
        console.log('error => ', err)
      }
    },

    additionMethod() {
      store.commit(ACTIONS.INCREMENT)
    },

    decrementMethod() {
      store.commit(ACTIONS.DECREMENT)      
    },
  },

  computed: {
    count() {
      this.test = store.state.count
      return this.test
    }
  }
}

</script>

<template>
  <main>
  <p>check {{ count }}</p>
  <button @click="fetchData()">Button</button>
  <button @click="additionMethod()">store ++</button>
  <button @click="decrementMethod()">store --</button>
  </main>
  <div>
    <p v-if="apidata.length">
      {{ apidata }}
    </p>
    <p v-else-if="error">{{ error }}</p>
    <p v-else>NO DATA</p>
  </div>
    <TableComponent :text-props=test />
</template>

<style></style>

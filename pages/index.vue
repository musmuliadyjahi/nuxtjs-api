<template>
  <div class="container">
    <h1>Magang DOT</h1>
    <ul>
      <li v-for="member in members" :key="member.id">
        {{ member.name }}
      </li>
    </ul>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        v-model="name"
      />
      <div class="input-group-append">
        <button
          class="btn btn-outline-secondary"
          type="button"
          @click="add(name)"
        >
          Button
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState(['members']),
  methods: {
    ...mapActions(['add'])
  }
}
</script>

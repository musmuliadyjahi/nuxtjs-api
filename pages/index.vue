<template>
  <div class="container">
    <h1 class="title mt-5 mb-5 text-center">Magang DOT</h1>

    <div class="input-group mb-5">
      <input
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        v-model="name"
      />
      <div class="input-group-append">
        <button @click="add(name)" class="btn btn-secondary" type="button">
          Button
        </button>
      </div>
    </div>

    <div class="row mb-5">
      <div class="col-3 mb-4" v-for="member in members" :key="member.id">
        <div class="card text-center">
          <div class="card-body">
            <h5 class="card-title">{{ member.name }}</h5>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['members']),
  methods: {
    add(name) {
      this.$store.dispatch('submitData', name)
      this.name = ''
    }
  }
}
</script>

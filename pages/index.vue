<template>
  <div class="container">
    <h1 class="title mt-5 mb-5 text-center">Magang DOT</h1>

    <div class="input-group mb-5">
      <input
        v-model="name"
        type="text"
        class="form-control"
        placeholder="Recipient's usernames"
        aria-label="Recipient's username"
      />
      <div v-bind:class="{ hidden: !isHidden }" class="input-group-append">
        <button @click="add(name)" class="btn btn-secondary" type="button">
          Submit
        </button>
      </div>
      <div v-bind:class="{ hidden: isHidden }" class="input-group-append">
        <button @click="update(name)" class="btn btn-secondary" type="button">
          Update
        </button>
      </div>
    </div>

    <div class="row mb-5">
      <div v-for="member in members" :key="member.id" class="col-3 mb-4">
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
            <button @click="get(member.id)" type="button" class="btn btn-info">
              Edit
            </button>
            <button
              @click="remove(member.id)"
              type="button"
              class="btn btn-danger"
            >
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      name: '',
      isHidden: true
    }
  },
  computed: mapState(['members']),
  methods: {
    add(name) {
      this.$store.dispatch('submitData', name)
      this.name = ''
    },
    remove(id) {
      this.$store.dispatch('removeData', id)
    },
    get(id) {
      this.$store.dispatch('getData', id).then((res) => {
        this.name = res.name
        this.isHidden = false
      })
    }
  }
}
</script>

<style media="screen">
.hidden {
  display: none;
}
</style>

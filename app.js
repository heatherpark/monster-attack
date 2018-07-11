new Vue({
  el: '#app',
  data: {
    scores: {
      player: 100,
      monster: 100
    }
  },
  methods: {
    attack: function() {
      this.scores.player -= 5;
      this.scores.monster -= 9;
    }
  }
});
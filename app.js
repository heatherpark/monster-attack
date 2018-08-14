new Vue({
  el: '#app',
  data: {
    hp: {
      player: 100,
      monster: 100
    },
    damage: {
      attack: {
        player: 5,
        monster: 9
      },
      specialAttack: {
        player: 9,
        monster: 15
      }
    },
    playing: false
  },
  methods: {
    attack: function() {
      if (this.hp.player && this.hp.monster
        || this.hp.player >= 0 && !this.hp.monster 
        || this.hp.monster >= 0 && !this.hp.player) {
        this.updateHP('player', 'attack');
        this.updateHP('monster', 'attack');
      }
    },
    newGame: function() {
      this.playing = true;
      
      this.hp.player = 100;
      this.hp.monster = 100;
    },
    updateHP: function(character, attackType) {
      if (this.hp[character] && this.damage[attackType]) {
        this.hp[character] -  this.damage[attackType][character] >= 0
          ? this.hp[character] -= this.damage[attackType][character]
          : this.hp[character] = 0;
      }
    },
    specialAttack: function() {
      if (this.hp.player && this.hp.monster
        || this.hp.player >= 0 && !this.hp.monster 
        || this.hp.monster >= 0 && !this.hp.player) {
        this.updateHP('player', 'specialAttack');
        this.updateHP('monster', 'specialAttack');
      }
    }
  }
});
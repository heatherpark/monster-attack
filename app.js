new Vue({
  el: '#app',
  data: {
    damageLog: [],
    hp: {
      player: 100,
      monster: 100
    },
    damageRange: {
      attack: [1, 5],
      specialAttack: [6, 10]
    },
    playing: false
  },
  methods: {
    attack: function() {
      if (this.hp.player && this.hp.monster
        || this.hp.player >= 0 && !this.hp.monster 
        || this.hp.monster >= 0 && !this.hp.player) {
        const playerDamage = this.getDamage('attack');
        const monsterDamage = this.getDamage('attack');

        this.updateHP('player', playerDamage);
        this.updateHP('monster', monsterDamage);

        this.logDamage(monsterDamage, playerDamage);
      }
    },
    getRandomNumber: function(range) {
      const min = range[0];
      const max = range[1];
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      
      return randomNumber;
    },
    getDamage: function(attackType) {
      return this.getRandomNumber(this.damageRange[attackType]);
    },
    logDamage: function(monsterDamage, playerDamage) {
      this.damageLog.push([monsterDamage, playerDamage]);
    },
    newGame: function() {
      this.playing = true;

      this.hp.player = 100;
      this.hp.monster = 100;
    },
    updateHP: function(character, damage) {
      if (!this.hp[character]) return;
      
      this.hp[character] - damage >= 0
        ? this.hp[character] -= damage
        : this.hp[character] = 0;
    },
    specialAttack: function() {
      console.log('special attack');
      if (this.hp.player && this.hp.monster
        || this.hp.player >= 0 && !this.hp.monster 
        || this.hp.monster >= 0 && !this.hp.player) {
          const playerDamage = this.getDamage('specialAttack');
          const monsterDamage = this.getDamage('specialAttack');
          console.log(playerDamage)
          console.log(monsterDamage)
          this.updateHP('player', playerDamage);
          this.updateHP('monster', monsterDamage);

          this.logDamage(monsterDamage, playerDamage);
      }
    }
  }
});
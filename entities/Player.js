goog.provide('ungravity.entities.Player');

/**
 * @constructor
 * @return {ungravity.entities.Player}
 */
ungravity.entities.Player = function() {
    for(var i = 0; i <= ungravity.settings.episodes; i++){
        var episodeName = ''+i;
        for(var j = 0; j <= ungravity.settings.levelsPerEpisode; j++){
            levelName = episodeName;
            if(j < 10){
                levelName += '0';
            }
            levelName += j;
            this.levelStars[levelName] = undefined;
        }
    }
    this.levelStars['101'] = 0;
    this.levelStars['201'] = 0;
};

goog.object.extend(ungravity.entities.Player.prototype, {

    /**
     * The player points for each level of the whole game
     * @type {Object}
     */
    levelStars: { },

    /**
     * The level that is currently playing
     * @type {Number}
     */
    levelName: undefined,

    /**
     * The stars collected in the current level
     * @type {Number}
     */
    stars: 0,

    /**
     * Returns the player total points
     * @return {[type]} [description]
     */
    getTotalPoints: function() {
        var total = 0;
        for (var key in this.levelStars) {
            if (isNaN(parseInt(this.levelStars[key]))) {
                continue;
            }
            total += parseInt(this.levelStars[key]);
        };
        return total;
    }
});
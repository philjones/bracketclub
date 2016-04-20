var bracketData = require('../lib/index');
var assert = require('assert');

describe('Bracket Data', function () {
    it('should have correct data for nba 16', function () {
        var b = bracketData({
            year: '2016',
            sport: 'nba'
        });

        assert.strictEqual(b.constants.REGION_COUNT, 2);
        assert.strictEqual(b.constants.FINAL_ID, 'F');
        assert.strictEqual(b.constants.ALL_IDS.join(' '), 'W E F');
        assert.strictEqual(b.constants.FINAL_NAME, 'Finals');
        assert.strictEqual(b.constants.UNPICKED_MATCH, 'X');
        assert.strictEqual(b.constants.TEAMS_PER_REGION, 8);
        assert.strictEqual(b.bracket.regions.W.teams[0], 'Golden State');
    });
});
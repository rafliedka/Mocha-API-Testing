const assert = require('chai').assert;
const app = require('../../assert')

//Asserting
//how to asserting
describe('welcome test', function(){
    it('app should return welcome message', function(){
        assert.equal(app(), 'welcome to QA Learning')
    })
})
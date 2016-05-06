describe('fizz_buzz_UI - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#input').val('90');
        $('#calculate').trigger('click');
    });

    it("displays fizzbuzz Value", function() {
        expect($('#display_value').text()).toBe('input');
    });

    it("displays fizzbuzz Message", function() {
        expect($('#display_message').text()).toBe('och jag skulle hellre vara ute i solen');
    });
});

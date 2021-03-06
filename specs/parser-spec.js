'use strict';

describe("Parser", function () {
    var L, Parser;

    beforeEach(function() {
        L = new lettuce();
        Parser = new L.Parser();
    });

    it('it must be a function of Lettuce', function () {
        var called = 0,
            func = function () { called++ };

        Parser.run({
            first: function() {
                func();
                expect(called).toEqual(1);
            },

            HomePage: function() {
                func();
                expect(called).toEqual(2);
            },

            AboutPage: function() {
                func();
                expect(called).toEqual(3);
            },

            last: function() {
                func();
                expect(called).toEqual(4);
            }
        });
    });

    it('it should remove all the executed functions', function () {
        var called = 0, methods = {
            'first': function () {
                called ++ ;
            }
        };

        Parser.methods = methods;
        Parser.execute('first');
        Parser.execute('first');

        expect(called).toEqual(2);
    });
});

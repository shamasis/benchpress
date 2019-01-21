describe('this suite does blah again', function () {
    it('this is one benchmark', function (done) {
        setTimeout(function () {
            done();
        }, 100);
    });

    it('this is another benchmark', function () {
        var i = 1000;
        while(i--) {}
    });
});

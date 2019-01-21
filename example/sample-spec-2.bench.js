describe('this suite does blah again 2', function () {
    it('this is second suite benchmark', function () {
        var i = 100000;
        while(i--) {}
    });

    it('this is second suite benchmark 2', function () {
        var i = 1000;
        while(i--) {}
    });
});

describe('this suite does blah again 3', function () {
    it('bench 1', function () {
        var i = 100000;
        while(i--) {}
    });

    it('bench 2', function () {
        var i = 1000;
        while(i--) {}
    });
});

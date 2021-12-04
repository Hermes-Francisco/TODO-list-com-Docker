exports.responseMock = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    return res;
}

exports.requestMock = () => {
    const req = {};
    req.params = {};
    req.body = {};
    req.headers = {};

    return req;
}

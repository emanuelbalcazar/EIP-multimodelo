function getGraph(callback) {
    $.get('/grafo', function (data) {
        return callback(false, data);
    });
}

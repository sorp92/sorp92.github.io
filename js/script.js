if (location.protocol != 'https:' && location.hostname != "localhost") location.href = 'https:' + window.location.href.substring(window.location.protocol.length);

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, {});
});

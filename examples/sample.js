function sortByName(a) {
	var result = a.slice(0);
	result.sort(function(x,y) {
		return x.name.localCompare(y.name);
	});
	return result;
}

var result = [
	sortByName(),
	sortByName('abcde'),
	sortByName(15),
	sortByName(['a', 'b', 'c']),
	sortByName('a', 'b', 'c'),
	sortByName([{ name: 'Zed' }, { name: 'Bob' }])
];
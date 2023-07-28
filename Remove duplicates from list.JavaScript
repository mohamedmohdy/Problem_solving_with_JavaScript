function distinct(a) {
  let unique = [];
	for (i = 0; i < a.length; i++) {
		if (unique.indexOf(a[i]) === -1) {
			unique.push(a[i]);
		}
	}
	return unique;
}

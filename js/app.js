var container = document.getElementById('container')

function start(){
	generateScene(5);
}

function generateScene(numRow) {
	for (var i = 0; i < numRow; i++) {
		var row = document.createElement('div');
		row.setAttribute('class', 'row')
		for (var j = 0; j < numRow; j++) {
			var div = document.createElement('div');
			div.setAttribute('class', 'pumpkin')
			//xconsole.log('taouaefw')
			row.appendChild(div)
		}
		container.appendChild(row)
	}
	
}

start()
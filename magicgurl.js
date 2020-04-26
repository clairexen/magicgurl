function magicgurl() {
	// based on https://github.com/nkhil/Brexit_means_Breadsticks/blob/master/content.js
	console.log("Running Magicgurl text search and replace.");
	var el = [...document.body.getElementsByTagName('*')];
	el.forEach(element => {
		element.childNodes.forEach(child => {
			if (child.nodeType === 3) {
				let text = child.nodeValue;

				text = text.replace(/Tranny/g, 'Magicgurl');
				text = text.replace(/tranny/g, 'magicgurl');
				text = text.replace(/Trannie/g, 'Magicgurl');
				text = text.replace(/trannie/g, 'magicgurl');

				text = text.replace(/Sissy/g, 'Magicgurl');
				text = text.replace(/sissy/g, 'magicgurl');
				text = text.replace(/Sissie/g, 'Magicgurl');
				text = text.replace(/sissie/g, 'magicgurl');

				text = text.replace(/Shemale/g, 'Magicgurl');
				text = text.replace(/shemale/g, 'magicgurl');

				text = text.replace(/Ladyboy/g, 'Magicgurl');
				text = text.replace(/ladyboy/g, 'magicgurl');

				child.nodeValue = text;
			}
		});
	});
}

window.onload = magicgurl();

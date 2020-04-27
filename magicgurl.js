function magicgurl() {
	// based on https://github.com/nkhil/Brexit_means_Breadsticks/blob/master/content.js
	console.log("Running Magicgurl text search and replace.");
	var el = [...document.body.getElementsByTagName('*')];
	el.forEach(element => {
		element.childNodes.forEach(child => {
			if (child.nodeType === 3) {
				let text = child.nodeValue;

				// trans women => magicgurl

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

				text = text.replace(/Shim/g, 'Magicgurl');
				text = text.replace(/shim/g, 'magicgurl');

				text = text.replace(/Ladyboy/g, 'Magicgurl');
				text = text.replace(/ladyboy/g, 'magicgurl');

				text = text.replace(/Dickgirl/g, 'Magicgurl');
				text = text.replace(/dickgirl/g, 'magicgurl');

				text = text.replace(/Trap/g, 'Magicgurl');
				text = text.replace(/trap/g, 'magicgurl');

				// trans men => magicboi

				text = text.replace(/Cuntboy/g, 'Magicboi');
				text = text.replace(/cuntboy/g, 'magicboi');

				text = text.replace(/Hefemale/g, 'Magicboi');
				text = text.replace(/hefemale/g, 'magicboi');

				child.nodeValue = text;
			}
		});
	});
}

window.onload = magicgurl();

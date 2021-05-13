const $GIFSpace = $('#gifs');
const $GIFform = $('#gif-form');
const $removeBtn = $('#remove');

async function getGIF(searchTerm) {
	const res = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
		params : { api_key: 'wtxIik5lou4uLhB2Gyns3kga5LxktUgE', q: `${searchTerm}`, limit: 1 }
	});
	renderGIF(res);
	// console.log(res);
}

// Render the GIF from the object
function renderGIF(obj) {
	const gifURL = obj.data.data[0].images.downsized.url;
	$GIFSpace.append(addGIFtoDOM(gifURL));
	// console.log(gifURL);
}

// Append GIF to DOM
function addGIFtoDOM(url) {
	const newDiv = document.createElement('DIV');
	newDiv.innerHTML = `<img src=${url}>`;
	return newDiv;
}

// Get GIF when you submit a search term
$GIFform.on('submit', function(e) {
	e.preventDefault();
	const $searchTerm = $('#search');
	// console.log($searchTerm.val());
	getGIF($searchTerm.val());
	$searchTerm.val('');
});

// Remove button removes GIFs
$removeBtn.on('click', function() {
	$GIFSpace.empty();
});

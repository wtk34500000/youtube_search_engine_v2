import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';


const API_KEY= 'AIzaSyAyxwNeDJwwYYLA33BYli6iJm2i1dbfVug';

YTSearch({key:API_KEY, term:'surboards'},function(data){
	console.log(data);
})

const App = function(){
	return (
		<div>
			<SearchBar />
		</div>
		);
}

ReactDom.render(<App />, document.querySelector('.container'));

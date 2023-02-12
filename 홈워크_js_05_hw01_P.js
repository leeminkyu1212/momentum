axios.get('https://api.example.com/data')
.then(function (response) {
	console.log((response))
})

//동기함수 여러 함수들을 동시에 수행할수 있다
//비동기 함수 시간이 걸리는 함수를 잠시 보류하고 다른 함수를 실행할 수있다
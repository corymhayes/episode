const fetch = require('node-fetch')

exports.handler = async function(event, context) {
  const query = event.queryStringParameters.show
  console.log(query)

  const showSearch = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=a3014d2e6db95934fd2619ce49e4cbad&language=en-US&page=1&query=${query}&include_adult=false`)
  const showData = await showSearch.json()

  console.log(showData)

  return { 
    statusCode: 200,
    body: JSON.stringify({ query: query })
  }
  
  // if (showData.results) {
  //   const showId = showData.results[0].id
  //   const numberOfSeasonsSearch = await fetch(`https://api.themoviedb.org/3/tv/${showId}?api_key=a3014d2e6db95934fd2619ce49e4cbad&language=en-US`)
  //   const numberOfSeasonsData = await numberOfSeasonsSearch.json()
  //   const randomSeasonNumber = getRandomNumber(numberOfSeasonsData.number_of_seasons)
  
  //   const seasonSearch = await fetch(`https://api.themoviedb.org/3/tv/${showId}/season/${randomSeasonNumber}?api_key=a3014d2e6db95934fd2619ce49e4cbad&language=en-US`)
  //   const numberOfEpisodesData = await seasonSearch.json()

  //   const randomEpisode = numberOfEpisodesData.episodes[getRandomNumber(numberOfEpisodesData.episodes.length)]
   
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({
  //       show_name: query,
  //       episode_number: randomEpisode.episode_number,
  //       name: randomEpisode.name,
  //       overview: randomEpisode.overview,
  //       season_number: randomEpisode.season_number,
  //       vote_average: randomEpisode.vote_average,
  //       poster_path: numberOfEpisodesData.poster_path
  //     })
  //   }
  // }
}
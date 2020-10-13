export const recentRelease = (data, category) => {
    const filterData = data.filter(movie => {
        return movie.category === category
    });
    return filterData.sort((date1, date2) => {
        return new Date(date1.recentRelease) > new Date(date2.recentRelease) ? -1 : 1
    })
}


export const suggestions = (data) => {
    return data.filter((movie) => {
        return movie.voteAverage >= 8
    })
}

export const mostViwed = (data) => {
    return data.sort((movie1, movie2) => {
        return movie1.popularity > movie2.popularity ? -1 : 1
    });
}
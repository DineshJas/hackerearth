const api = "http://starlord.hackerearth.com/recipe";

export const getFoodList = (callBack) => {
    fetch(api)
    .then(response => response.json())
    .then(data => callBack(data));
}

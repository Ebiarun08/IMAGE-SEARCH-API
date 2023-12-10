const accessKey = "ByPVzqEo1Zv1iu9iieBSeUrItI-dpqZsAKEh-rJaAxM";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-reasult");
const showMore = document.getElementById("showmore-btn");


let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value;

    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    const results = data.results;
    results.map((result)=>{
        const image =document.createElement("img");
        image.src = result.urls.small;
        const imageLink =document.createElement("a");
        imageLink.href =result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    showMore.style.display = "block";
}
searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page = 1;
    searchImages();
});
showMore.addEventListener("click", ()=>{
    page++;
    searchImages();
});